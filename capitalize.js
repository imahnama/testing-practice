const capitalize = (x) => {
  return (x.charAt(0).toUpperCase() + x.slice(1))
}

capitalize('name')

module.exports = capitalize
