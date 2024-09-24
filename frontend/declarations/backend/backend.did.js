export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'getDoomCharacters' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(IDL.Text, IDL.Text))],
        ['query'],
      ),
    'getDoomGames' : IDL.Func([], [IDL.Vec(IDL.Text)], ['query']),
    'getDoomHistory' : IDL.Func([], [IDL.Text], ['query']),
    'getVisitorCount' : IDL.Func([], [IDL.Nat], ['query']),
    'incrementVisitorCount' : IDL.Func([], [IDL.Nat], []),
  });
};
export const init = ({ IDL }) => { return []; };
