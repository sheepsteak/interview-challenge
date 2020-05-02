# Feedr Technical Challenge

Thank you for taking the time to attempt this challenge.

These tests are used to evaluate candidates of all skill levels so please complete them to a level you feel is an accurate representation of your skill set.

Please read `README-FRONTEND.md` for further instructions.

If you have any questions or would like to clarify any details, please email lyz@feedr.co.

Good luck!

## My thoughts

I tried to keep the tests in `App.test.js` almost like integration tests and did unit tests for the separate components/functions. I usually use React Testing Library for this now and try to mimic a user clicking about. However, I was able to get most of this done using Enzyme `mount`.

I took the extra step of only allowing an item to be added to the "Menu preview" once as this seemed like the common sense thing to do.

I thought about making one component for an item since they're the same in both sections. It seemed unneccessary though at this stage. I can see from the screenshot that they would different in the final application anyway. I also thought about abstracting out the header section into its own component but it's still simple enough for now.
