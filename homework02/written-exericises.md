#### 1. Explain why do we want sometimes to use setImmediate instead of using setTimeout?

setTimeout will schedules a callback in the timers phase of the event loop.
setImmediate will schedules a callback in the check phase of the event loop after IO event's callbacks.
So if there is a method need to run after the IO event immediately, it should resisted with the setImmediate method.

#### 2. Explain the difference between process.nextTick and setiImmediate?

1. setImmediate will schedules a callback in the check phase of the event loop. but process.nextTick() is not part of the event loop.
2. All callbacks in the nextTick queue will processes first before the event loop continues. But the callbacks in the check phase can't, it has limit.


#### 3. Name 10 modules that Node provides by default.

1. buffer
2. child_process
3. domain
4. events
5. fs
6. http
7. http2
8. https
9. net
10. os
11. path
12. string_decoder
13. url
