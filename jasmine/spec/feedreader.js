/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        // Check each allFeeds has a URL defined and the URL is not empty.
        it('url defined', function() {
            for(let feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            }
        });

        // Check each allFeeds has a name defined and the name is not empty.
        it('name defined', function() {
            for(let feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            }
        });
    });

    // Test suite for menu function 
    describe('The menu', function() {
        const body = document.querySelector('body');

        // Check the menu element is hidden by default. 
        it('is hidden', function() {
            expect(body.classList.contains('menu-hidden')).toBe(true);
        });

         // Check the menu displays when clicked and it hides when clicked again.
        it('toggle menu', function() {
            const menu = document.querySelector('.menu-icon-link');

            // simulate click event to menu
            // first click
            menu.click();
            expect(body.classList.contains('menu-hidden')).toBe(false);
            // second click
            menu.click();
            expect(body.classList.contains('menu-hidden')).toBe(true);
        });
    });

    // Test suite for init load feed
    describe('Initial Entries', function() {
        //  Wait till work is completed
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        // Check the load feed has at least one content
        it('load feed', function() {
            const feedArea = document.querySelector('.feed');
            expect(feedArea.children.length > 0).toBe(true);
        });
    });

    /* TODO: Write a new test suite named "New Feed Selection" */
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
