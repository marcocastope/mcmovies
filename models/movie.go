package models

import (
	"time"

	"gopkg.in/mgo.v2/bson"
)

// Movie model movie
type Movie struct {
	ID        bson.ObjectId `json:"id" bson:"_id"`
	Name      string        `json:"name" bson:"name"`
	Year      string        `json:"year" bson:"year"`
	Poster    string        `json:"poster" bson:"poster"`
	Directors []string      `json:"directors" bson:"directors"`
	CreatedAt time.Time     `json:"createdAt" bson:"createdAt"`
}
