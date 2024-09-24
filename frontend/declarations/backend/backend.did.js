export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'getDoomHistory' : IDL.Func([], [IDL.Text], ['query']),
    'getVisitorCount' : IDL.Func([], [IDL.Nat], ['query']),
    'incrementVisitorCount' : IDL.Func([], [IDL.Nat], []),
  });
};
export const init = ({ IDL }) => { return []; };
