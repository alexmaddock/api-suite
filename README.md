# API Test Suite

The purpose of this is to create an API test suite as a model and see how it performs using a framwork and whatever other issues I may run into. Let the games bening!!

## Toolset Considerations

Chai has a http thing to use whatever you want to call it. Not sure how it compares to using something like Mocha or Jest, and then importing some http client like Axios or Isomorphic fetch to combine all the stuff into a test suite.

Need to research other tools on the market as well. But for the moment I think the best will be to use a test framework with the standard Describe-It test runners, something like a http client to import and then a standard assertion library like Chai or something with assert().something() or whatever.

This [here](https://openbase.com/categories/js/best-nodejs-assertion-libraries) mentions the 10 best assertion libs which is nonsense, these are test frameworks with their relevant assertion libs. Maybe it's a reference point to explore... let's see.

## Site Considerations

Me thinks it is best to reach out to seek.com and use that credential set already existing to make api calls etc and see how i go throwing around web tokens and what not as part of headers or query selectors.

## Problems with Fetch

This is a dogs breakfast of a request. Genuinely surprised at how lacking the documentation is on the isomporphic fetch github repo. Had to eventually work out where to find it via a youtube video and reference the original fetch source. Insanity.
The response also sucks compared to axios, like seriously who would use this crap? 

Won't give up on this just yet till I've played around and given it a chance at least. If only it would return sensible information and headers.

[video](https://www.youtube.com/watch?v=tc8DU14qX6I)
[proper fetch documentation - the original](https://developer.mozilla.org/en-US/docs/Web/API/fetch)

Good thing is the response can have `response.headers` and `response.status/statusText` which gives more detail. Sure it's cleaner than axios, but also somewhat cryptic with the insane structure of it. Maybe it will do...