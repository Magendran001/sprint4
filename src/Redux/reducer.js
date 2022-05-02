const init = [{ data: [] }];

export const reducer = (store = init, { type, payload }) => {
  switch (type) {


    case "store":
      {

        return { ...store, data: payload };
      }


  }
  return store
};
