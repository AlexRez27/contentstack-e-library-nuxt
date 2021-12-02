function fillStateAllBookArray(items) {
  return items.map(el => el = {
    title: el.title,
    url: el.cover_imageConnection.edges[0].node.url,
    uid: el.system.uid,
    isAvailable: el.available
  })
}

export {
  fillStateAllBookArray as default
}