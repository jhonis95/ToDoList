const route = (event) => {
    event = event || window.event;
    event.preventDefault();s
    window.history.pushState({}, "", event.target.href);
    handleLocation();
  };
  
  const routes = {
    404: "/404.html",
    "/": "/pages/home.html",
    "/app": "/pages/app.html"
  };
  
  const handleLocation = async () => {
    const path = window.location.pathname;
    console.log(path)
    const route = routes[path] || routes[404];
    console.log(route)
    const html = await fetch(route).then((data) => {console.log(data);data.text()});
    console.log(html)
    document.getElementById("contentPage").innerHTML = html;
  };
  
  window.onpopstate = handleLocation;
  window.route = route;
  
  handleLocation();