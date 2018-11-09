package common

import (
	"log"
	"time"

	"gopkg.in/mgo.v2"
)

var session *mgo.Session

// GetSession obtiene la session de mongoDB
func GetSession() *mgo.Session {
	if session != nil {
		var err error
		session, err = mgo.DialWithInfo(&mgo.DialInfo{
			Addrs:    []string{AppConfig.dBHost},
			Username: AppConfig.dBUser,
			Password: AppConfig.dBPwd,
			Timeout:  60 * time.Second,
		})
		if err != nil {
			log.Fatalf("error al obtener la session :%s", err)
		}
	}
	return session
}

// CreateDbSession crea la session
func CreateDbSession() {
	var err error
	session, err = mgo.DialWithInfo(&mgo.DialInfo{
		Addrs:    []string{AppConfig.dBHost},
		Username: AppConfig.dBUser,
		Password: AppConfig.dBPwd,
		Timeout:  60 * time.Second,
	})
	if err != nil {
		log.Fatalf("error al crear la session :%s", err)
	}
}
