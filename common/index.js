function fillStateAllBookArray(items, state){
  items.forEach(el => {
    const book = {
      title: el.title,
      url: el.cover_imageConnection.edges[0].node.url,
      uid: el.system.uid
    }
    state.push(book)
  })
  return state
}

export {
  fillStateAllBookArray as default
}