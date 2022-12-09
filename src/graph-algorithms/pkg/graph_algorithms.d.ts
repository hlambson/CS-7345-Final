declare namespace wasm_bindgen {
	/* tslint:disable */
	/* eslint-disable */
	/**
	* @param {number} v
	* @returns {any}
	*/
	export function create_cycle_graph(v: number): any;
	/**
	* @param {number} v
	* @returns {Promise<any>}
	*/
	export function create_cycle_graph_thread(v: number): Promise<any>;
	/**
	* @param {number} v
	* @param {number} n
	* @returns {any}
	*/
	export function create_random_graph(v: number, n: number): any;
	/**
	* @param {number} v
	* @param {number} n
	* @returns {Promise<any>}
	*/
	export function create_random_graph_thread(v: number, n: number): Promise<any>;
	/**
	* @param {any} graph
	* @param {number} root
	* @param {number} target
	* @returns {Uint32Array}
	*/
	export function breadth_first_search(graph: any, root: number, target: number): Uint32Array;
	/**
	* @param {any} graph
	* @param {number} root
	* @param {number} target
	* @returns {Promise<any>}
	*/
	export function breadth_first_search_thread(graph: any, root: number, target: number): Promise<any>;
	/**
	* @param {any} graph
	* @param {number} root
	* @param {number} target
	* @returns {Uint32Array}
	*/
	export function depth_first_search(graph: any, root: number, target: number): Uint32Array;
	/**
	* @param {any} graph
	* @param {number} root
	* @param {number} target
	* @returns {Promise<any>}
	*/
	export function depth_first_search_thread(graph: any, root: number, target: number): Promise<any>;
	/**
	* @param {any} graph
	* @param {number} v
	* @returns {Uint32Array}
	*/
	export function kruskal(graph: any, v: number): Uint32Array;
	/**
	* @param {any} graph
	* @param {number} v
	* @returns {Promise<any>}
	*/
	export function kruskal_thread(graph: any, v: number): Promise<any>;
	/**
	* @param {any} graph
	* @param {number} root
	* @param {number} target
	* @param {number} v
	* @returns {Promise<void>}
	*/
	export function test_case(graph: any, root: number, target: number, v: number): Promise<void>;
	/**
	* @param {WorkerGlobalScope} wgs
	* @param {string} req_id
	* @returns {_Worker}
	*/
	export function wmt_bootstrap(wgs: WorkerGlobalScope, req_id: string): _Worker;
	/**
	*/
	export class _Worker {
	  free(): void;
	}
	
}

declare type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

declare interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly create_cycle_graph: (a: number) => number;
  readonly create_cycle_graph_thread: (a: number) => number;
  readonly create_random_graph: (a: number, b: number) => number;
  readonly create_random_graph_thread: (a: number, b: number) => number;
  readonly breadth_first_search: (a: number, b: number, c: number, d: number) => void;
  readonly breadth_first_search_thread: (a: number, b: number, c: number) => number;
  readonly depth_first_search: (a: number, b: number, c: number, d: number) => void;
  readonly depth_first_search_thread: (a: number, b: number, c: number) => number;
  readonly kruskal: (a: number, b: number, c: number) => void;
  readonly kruskal_thread: (a: number, b: number) => number;
  readonly test_case: (a: number, b: number, c: number, d: number) => number;
  readonly wmt_bootstrap: (a: number, b: number, c: number) => number;
  readonly __wbg__worker_free: (a: number) => void;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number) => number;
  readonly __wbindgen_export_2: WebAssembly.Table;
  readonly _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hcbbe810d67147738: (a: number, b: number, c: number) => void;
  readonly _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__ha132543ffb907e4d: (a: number, b: number, c: number) => void;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_free: (a: number, b: number) => void;
  readonly __wbindgen_exn_store: (a: number) => void;
  readonly wasm_bindgen__convert__closures__invoke2_mut__hcf24686dedd1d909: (a: number, b: number, c: number, d: number) => void;
}

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
declare function wasm_bindgen (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
