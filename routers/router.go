package routers

import (
	"github.com/gorilla/mux"
)

// InitRoutes ...
func InitRoutes() *mux.Router {
	router := mux.NewRouter().StrictSlash(false)
	router = SetMovieRouter(router)

	return router
}
