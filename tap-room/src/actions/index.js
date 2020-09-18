import * as c from './../actions/ActionTypes';


// export const toggleEditing = () => ({
//   type: c.TOGGLE_EDITING,
// });
// export const selectedBottle = id => ({
//   type: c.SELECTED_BOTTLE,
//   id
// });

export const toggleForm = () => ({
  type: c.TOGGLE_FORM,
});

export const deleteBottle = id => ({
  type: c.DELETE_BOTTLE,
  id
});

export const addBottle = (bottle) => {
  const { name, type, price, origin, tastingNotes, count, id } = bottle;
  return {
    type: c.ADD_BOTTLE,
    name: name,
    type: type,
    price: price,
    origin: origin,
    tastingNotes: tastingNotes,
    count: count,
    id: id
  }
}

// whenBottleClicked = { props.onBottleSelection }
//         name={bottle.name}
//         type={bottle.type}
//         price={bottle.price}
//         origin={bottle.origin}
//         tastingNotes={bottle.tastingNotes}
//         count={bottle.count}
//         id={bottle.id}
//         key={bottle.id}/>