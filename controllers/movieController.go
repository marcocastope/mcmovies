package controllers

import (
	"encoding/json"
	"net/http"

	"gopkg.in/mgo.v2/bson"

	"github.com/gorilla/mux"

	"github.com/marcocastope/mcmoviesv1/data"

	"github.com/marcocastope/mcmoviesv1/common"
	"github.com/marcocastope/mcmoviesv1/models"
)

// CreateMovie HTTP Post - "/movies"
func CreateMovie(w http.ResponseWriter, r *http.Request) {
	movie := models.Movie{}

	err := json.NewDecoder(r.Body).Decode(&movie)
	if err != nil {
		common.DisplayMessage(w, "error al recibir los datos del request", http.StatusBadRequest)
		return
	}

	context := NewContext()
	defer context.Close()
	c := context.DBCollection("movies")
	repo := &data.MovieRepository{C: c}
	err = repo.Create(&movie)
	if err != nil {
		common.DisplayMessage(w, "error al crear la película", http.StatusInternalServerError)
		return
	}
	common.DisplayMessage(w, "película creado con éxito", http.StatusCreated)
}

// GetMovies HTTP Get - "/movies"
func GetMovies(w http.ResponseWriter, r *http.Request) {
	context := NewContext()
	defer context.Close()

	c := context.DBCollection("movies")
	repo := &data.MovieRepository{C: c}
	movies := repo.GetAll()
	bs, err := json.Marshal(movies)
	if err != nil {
		common.DisplayMessage(w, "error al covertir movies en bytes", http.StatusInternalServerError)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(bs)

}

// GetMovieByID HTTP Get - "/movies/{id}"
func GetMovieByID(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	id := vars["id"]
	context := NewContext()
	defer context.Close()

	c := context.DBCollection("movies")
	repo := &data.MovieRepository{C: c}
	movie, err := repo.GetByID(id)
	if err != nil {
		common.DisplayMessage(w, "error al obtener la película", http.StatusInternalServerError)
		return
	}
	bs, err := json.Marshal(movie)
	if err != nil {
		common.DisplayMessage(w, "error al covertir movies en bytes", http.StatusInternalServerError)
		return
	}
	w.Header().Set("Content-Type", "apllication/json")
	w.WriteHeader(http.StatusOK)
	w.Write(bs)
}

// UpdateMovie HTTP Put - "/movies/{id}"
func UpdateMovie(w http.ResponseWriter, r *http.Request) {
	movie := models.Movie{}

	vars := mux.Vars(r)
	id := bson.ObjectIdHex(vars["id"])

	err := json.NewDecoder(r.Body).Decode(&movie)
	if err != nil {
		common.DisplayMessage(w, "error al recibir los datos del request", http.StatusBadRequest)
		return
	}
	movie.ID = id

	context := NewContext()
	defer context.Close()
	c := context.DBCollection("movies")
	repo := &data.MovieRepository{C: c}
	err = repo.Update(&movie)
	if err != nil {
		common.DisplayMessage(w, "error al actualizar la película", http.StatusInternalServerError)
		return
	}
	common.DisplayMessage(w, "pelicula actualizado con éxito", http.StatusOK)
}

// DeleteMovie HTTP Delete - "/movies/{id}"
func DeleteMovie(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	id := vars["id"]
	context := NewContext()
	defer context.Close()

	c := context.DBCollection("movies")
	repo := &data.MovieRepository{C: c}
	err := repo.Delete(id)
	if err != nil {
		common.DisplayMessage(w, "error al eliminar la película", http.StatusInternalServerError)
		return
	}
	common.DisplayMessage(w, "película eliminada con éxito", http.StatusOK)
}
