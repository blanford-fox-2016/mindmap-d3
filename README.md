# mindmap-d3

## How to run
`npm i -g nodemon express browser-sync d3 cors `
1. client
```sh
cd client
npm install
bower install
gulp
```
2. server
```sh
cd server
npm install
npm run dev
```

## Dependencies
1. client
  * express.js
  * cors
  * nodemon
2. server
  * gulp
  * browser-sync
  * bower
  * d3.js

## API End Point
Default development port & host : http://localhost:3000

| Routes | HTTP | Description |
|--------|------|-------------|
| /api/maps | GET | get data JSON from file data.json |

## data.JSON
```JSON
{
    "_id" : "581aff5f9e75fc508056c7d3",
    "name" : "Main Idea",
    "children" : [
        {
            "name" : "Idea 1"
        },
        {
            "name" : "Idea 2",
            "children" : [
                {
                    "name" : "Thinking about something"
                },
                {
                    "name" : "Thinking about something else",
                    "children" : [
                        {
                            "name" : "Procastinate all the time"
                        },
                        {
                            "name" : "Please be focus!"
                        }
                    ]
                }
            ]
        },
        {
            "name" : "Eat and lunch"
        },
        {
            "name" : "Dinner",
            "children" : [
                {
                    "name" : "Dinner with someone"
                },
                {
                    "name" : "Or let's see a movie instead"
                }
            ]
        },
        {
            "name" : "Vacation"
        },
        {
            "name" : "Take a break"
        },
        {
            "name" : "Take a hobby",
            "children" : [
                {
                    "name" : "Community"
                },
                {
                    "name" : "Join a meetup",
                    "children" : [
                        {
                            "name" : "jakartaJS"
                        },
                        {
                            "name" : "Scrum"
                        }
                    ]
                }
            ]
        },
        {
            "name" : "Another point"
        },
        {
            "name" : "Creating a product"
        }
    ]
}
```

## File's Structure
```JSON
```

## Contributor
Ken Duigraha Putra &copy; 2016

## License
MIT
