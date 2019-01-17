# Introduction to GraphQL

## What is GraphQL

GraphQL is composed of two main parts, the **query language**, which is used to request data, and the **framework** that processes these queries.

**Schema** - A special kind of document that describes how a GraphQL endpoint can receive and send information

**Query Language** - The syntax we use to write GraphQL queries that retrieve data from an endpoint

**Self-documenting API** - An API that can be easily understood just by reading its schema -- no extra documentation needed

- GraphQL Documentation: [Introduction to GraphQL](http://graphql.org/learn/)
- GraphQL Documentation: [Schemas and Types](http://graphql.org/learn/schema/#object-types-and-fields)

## GraphQL Vs. REST

GraphQL allows us to nest complex data in a single request.

There is a root level end point and when querying that end point, one can include as many or as few fields as needed.

**REST** - A RESTful API is one that uses HTTP requests to GET, PUT, POST, and DELETE data.

- For example: http://api.example.com/movies/gone-with-the-wind

## GraphQL Terminology: Queries, Types, and Fields

**Query** - Queries specify which endpoints we want to call, how we want the response to look

**Fields** - Properties that comprise the shape of a response

**Type** - A collection of fields that make up a specific queryable object.

- GraphQL Documentation: [Fields](http://graphql.org/learn/queries/#fields)

---

## Anatomy of a Query

Basically, a query is composed of three parts, the query declaration, the endpoint, and the fields.

```
query {
  topMovieByRevenue {
    id
    title
    revenue
  }
}
```

- The query declaration tells GraphQL that we'll only be retrieving information and not making any changes.
- In the curly braces following the query declaration, we specify which endpoint or endpoints we'd like to call.
  - In this case, we're calling the topMoviebyRevenue endpoint, which will return the top earning movie we have in our backend.
    - In the curly braces following the endpoint name, we specify the fields we want returned for that endpoint.
    - This is how we tell GraphQL to include or exclude certain properties from our response.

**Declaration** - The keyword which starts every GraphQL query

**Endpoint** - A section of a GraphQL backend responsible for returning a specific piece of all the data available

- Tutorial: [Getting started with GraphQL queries and mutations](https://building.buildkite.com/tutorial-getting-started-with-graphql-queries-and-mutations-11211dfe5d64), by Tim Lucas
