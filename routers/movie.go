package routers

import (
	"github.com/gorilla/mux"
	"github.com/marcocastope/mcmoviesv1/controllers"
)

// SetMovieRouter establecer la ruta movie
func SetMovieRouter(router *mux.Router) *mux.Router {
	router.HandleFunc("/api/movies", controllers.CreateMovie).Methods("POST")
	router.HandleFunc("/api/movies", controllers.GetMovies).Methods("GET")
	router.HandleFunc("/api/movies/{id}", controllers.GetMovieByID).Methods("GET")
	router.HandleFunc("/api/movies/{id}", controllers.UpdateMovie).Methods("PUT")
	router.HandleFunc("/api/movies/{id}", controllers.DeleteMovie).Methods("DELETE")

	return router
}
