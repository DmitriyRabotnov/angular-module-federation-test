import { Observable, defer, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

type Factory = () => unknown;

interface Container {
  init(shareScope: unknown): Promise<void>;
  get(module: string): Promise<Factory>;
}

interface LoadRemoteModuleEsmOptions {
    remoteEntry: string;
    exposedModule: string;
}

declare const __webpack_init_sharing__: ( shareScope: string ) => Promise<void>;
declare const __webpack_share_scopes__: { default: unknown };

const DEFAULT_SHARE_SCOPE = 'default';

const containerMap:Record<string, Container> = {};
const remoteMap:Record<string, boolean> = {};

let isDefaultScopeInitialized = false;


const elevateModule = async <T = unknown>({ remoteEntry, exposedModule }:LoadRemoteModuleEsmOptions): Promise<T> => {
  const factory = await containerMap[remoteEntry].get(exposedModule);
  return <T>factory();
}

const initContainer = async (container:Container, remoteEntry:string): Promise<Container> => {
  if (!remoteMap[remoteEntry]) {
    if (!isDefaultScopeInitialized) {
      await __webpack_init_sharing__(DEFAULT_SHARE_SCOPE);
      isDefaultScopeInitialized = true;
    }

    await container.init(__webpack_share_scopes__[DEFAULT_SHARE_SCOPE]);
    remoteMap[remoteEntry] = true;
  }
  return container;
}


const loadModuleEntry = (remoteEntry: string): Observable<Container> => containerMap[remoteEntry] ? of() : defer(() => import(/* webpackIgnore:true */ remoteEntry)).pipe(
    switchMap(container => initContainer(container, remoteEntry)),
    tap(container => {
      containerMap[remoteEntry] = container;
    })
  );

export const loadMicroFrontend = <T = unknown>(arg: LoadRemoteModuleEsmOptions): Observable<Promise<T>> => of(arg?.remoteEntry).pipe(
    switchMap((remoteEntry):Observable<Container | never> => loadModuleEntry(remoteEntry)),
    map(():Promise<T> => elevateModule(arg))
  );
