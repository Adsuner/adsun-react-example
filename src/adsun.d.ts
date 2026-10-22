type ShowPromiseResult = { done: boolean; description: string; state: "load" | "render" | "playing" | "destroy"; error: boolean };
interface AdController { show(): Promise<ShowPromiseResult> }
interface Window { Adsun?: { init(p: { blockId: string; debug?: boolean; debugConsole?: boolean }): AdController } }
