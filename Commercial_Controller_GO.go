// 1 battery 4 columns 5 cages 

package main

import (
	"bufio"
	"fmt"
	"log"
	"os"
	"sort"
	"strconv"
	"strings"
	"time"
)

// Column(4)

type Column struct {
	id           int
	status       string
	cages        []Cage
	floorsServed []int
}

// NewColumn is a Column factory function (constructor)
func NewColumn(id int, status string, cages []Cage, floorsServed []int) Column {
	c := Column{}
	c.id = id
	c.status = status
	c.cages = cages
	c.floorsServed = floorsServed
	return c
}

// Cages 


// Cage objects are generated as a list in the Column object.
type Cage struct {
	id               int
	status           string
	doors            string
	picReq           []Order
	destreq          []Order
	levelActual      int
	direction        string
	timer            int
	doorSensorStatus string
}

// NewCage is a Cage factory function (constructor)
func NewCage(id int, status string, doors string) Cage {
	c := Cage{}
	c.id = id
	c.status = status
	c.doors = doors
	c.levelActual = 1
	c.direction = "Up"
	c.timer = 0
	c.doorSensorStatus = "Clear"
	return c
}
// Cages 

// Cage objects are generated as a list in the Column object.
type Cage struct {
	id               int
	status           string
	doors            string
	picReq           []Order
	destreq          []Order
	levelActual      int
	direction        string
	timer            int
	doorSensorStatus string
}

// NewCage is a Cage factory function (constructor)
func NewCage(id int, status string, doors string) Cage {
	c := Cage{}
	c.id = id
	c.status = status
	c.doors = doors
	c.levelActual = 1
	c.direction = "Up"
	c.timer = 0
	c.doorSensorStatus = "Clear"
	return c
}

// CleanUpOrders loops through the cages Order queue updating and removing items as necessary
func (c *Cage) CleanUpOrders() {
	for i := (len(c.picReq) - 1); i >= 0; i-- {
		if c.levelActual == c.picReq[i].pickup {
			c.picReq[i].status = "Destination"
		}
		if c.picReq[i].status == "Destination" {
			c.destreq = append(c.destreq, c.picReq[i])
			c.picReq = append(c.picReq[:i], c.picReq[i+1:]...)
			readout := "Destination is now " + strconv.Itoa(c.destreq[i].destination)
			fmt.Println(readout)
		}
	}
	for i := (len(c.destreq) - 1); i >= 0; i-- {
		if c.levelActual == c.destreq[i].destination {
			c.destreq[i].status = "Completed"
		}
		if c.destreq[i].status == "Completed" {
			c.destreq = append(c.destreq[:i], c.destreq[i+1:]...)
		}
	}
}

