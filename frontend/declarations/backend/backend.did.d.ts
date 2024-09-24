import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface _SERVICE {
  'getDoomCharacters' : ActorMethod<[], Array<[string, string]>>,
  'getDoomGames' : ActorMethod<[], Array<string>>,
  'getDoomHistory' : ActorMethod<[], string>,
  'getVisitorCount' : ActorMethod<[], bigint>,
  'incrementVisitorCount' : ActorMethod<[], bigint>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
