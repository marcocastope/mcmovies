package data

import (
	"time"

	"github.com/marcocastope/mcmoviesv1/models"
	"gopkg.in/mgo.v2"
	"gopkg.in/mgo.v2/bson"
)

// MovieRepository crea la colección movie
type MovieRepository struct {
	C *mgo.Collection
}

// Create crea la película
func (r *MovieRepository) Create(movie *models.Movie) error {
	objID := bson.NewObjectId()
	movie.ID = objID
	movie.CreatedAt = time.Now()

	err := r.C.Insert(&movie)
	return err
}

// Update actualiza la película
func (r *MovieRepository) Update(movie *models.Movie) error {
	err := r.C.Update(bson.M{"_id": movie.ID},
		bson.M{"$set": bson.M{
			"name":      movie.Name,
			"year":      movie.Year,
			"poster":    movie.Poster,
			"directors": movie.Directors,
		}})
	return err
}

// Delete elimina una pelicula
func (r *MovieRepository) Delete(id string) error {
	err := r.C.Remove(bson.M{"_id": bson.ObjectIdHex(id)})
	return err
}

// GetAll obtiene las peliculas
func (r *MovieRepository) GetAll() (movies []models.Movie) {
	iter := r.C.Find(nil).Iter()
	result := models.Movie{}
	for iter.Next(&result) {
		movies = append(movies, result)
	}
	return
}

// GetByID ...
func (r *MovieRepository) GetByID(id string) (movie models.Movie, err error) {
	err = r.C.FindId(bson.M{"_id": bson.ObjectIdHex(id)}).One(&movie)
	return
}
