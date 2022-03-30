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

`response.body` can also be done. How I don't understand when the response structure is as such:

```
Response {
  size: 0,
  timeout: 0,
  [Symbol(Body internals)]: {
    body: Gunzip {
      _writeState: [Uint32Array],
      _readableState: [ReadableState],
      _events: [Object: null prototype],
      _eventsCount: 5,
      _maxListeners: undefined,
      _writableState: [WritableState],
      allowHalfOpen: true,
      bytesWritten: 0,
      _handle: [Zlib],
      _outBuffer: <Buffer 55 55 55 55 55 55 55 55 55 55 55 55 55 55 55 55 00 00 00 00 00 00 00 00 30 00 00 00 00 00 00 00 01 00 00 00 00 00 00 00 7e 7d 58 15 01 00 00 00 b8 5a ... 16334 more bytes>,
      _outOffset: 0,
      _chunkSize: 16384,
      _defaultFlushFlag: 2,
      _finishFlushFlag: 2,
      _defaultFullFlushFlag: 3,
      _info: undefined,
      _maxOutputLength: 4294967295,
      _level: -1,
      _strategy: 0,
      [Symbol(kCapture)]: false,
      [Symbol(kTransformState)]: [Object],
      [Symbol(kError)]: null
    },
    disturbed: false,
    error: null
  },
  [Symbol(Response internals)]: {
    url: 'https://securepubads.g.doubleclick.net/pagead/ppub_config?ippd=stackoverflow.com',
    status: 200,
    statusText: 'OK',
    headers: Headers { [Symbol(map)]: [Object: null prototype] },
    counter: 0
  }
}
```

Can also return `response.text()` and `response.blob() // image`.