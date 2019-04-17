let routes = []
let BC_NAVIGATION = window.sessionStorage.getItem('BC_NAVIGATION')

if (BC_NAVIGATION) {
  routes = JSON.parse(BC_NAVIGATION)
}

export default routes