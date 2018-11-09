package controllers

import (
	"github.com/marcocastope/mcmoviesv1/common"
	"gopkg.in/mgo.v2"
)

// Context ...
type Context struct {
	MongoSession *mgo.Session
}

// Close cierra la session
func (c *Context) Close() {
	c.MongoSession.Close()
}

// DBCollection ...
func (c *Context) DBCollection(name string) *mgo.Collection {
	return c.MongoSession.DB(common.AppConfig.Database).C(name)

}

// NewContext ...
func NewContext() *Context {
	session := common.GetSession().Copy()
	context := &Context{
		MongoSession: session,
	}
	return context
}
