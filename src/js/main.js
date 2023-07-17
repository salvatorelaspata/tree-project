document.addEventListener("DOMContentLoaded", function () {
    var Router = function (name, routes) {
        return {
            name: name,
            routes: routes
        }
    };
    var view = document.getElementsByClassName('antani');
    var myRouter = new Router('myRouter', [
        {
            path: '/',
            name: "Dahsboard"
        },
        {
            path: '/todo',
            name: "To-Do"
        },
        {
            path: '/calendar',
            name: "Calendar"
        }
    ]);
    var currentPath = window.location.pathname;
    if (currentPath === '/') {
        view.innerHTML = "You are on the Dashboard";
        console.log(view);
    } else {
        view.innerHTML = "you are not";
    }
});