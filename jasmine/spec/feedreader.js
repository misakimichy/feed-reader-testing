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
    const feedArea = document.querySelector('.feed');
   // Test suite for RSS feeds variable
    describe('RSS Feeds', function() {
        // Check allFeeds is defined and not empty
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // Check each allFeeds has a URL defined and the URL is not empty
        it('define url', function() {
            for(let feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            }
        });

        // Check each allFeeds has a name defined and the name is not empty
        it('define name', function() {
            for(let feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            }
        });
    });

    // Test suite for menu function 
    describe('The Menu', function() {
        const body = document.querySelector('body');

        // Check the menu element is hidden by default
        it('is hidden', function() {
            expect(body.classList.contains('menu-hidden')).toBe(true);
        });

         // Check the menu displays when clicked and it hides when clicked again
        it('toggle menu', function() {
            const menu = document.querySelector('.menu-icon-link');

            // simulate click event to menu
            // first click
            menu.click();
            expect(body.hasClass.contains('menu-hidden')).toBe(false);
            // second click
            menu.click();
            expect(body.hasClass.contains('menu-hidden')).toBe(true);
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
            
            expect(feedArea.children.length > 0).toBe(true);
        });
    });

    // Test suite for new feed
    describe('New Feed Selection', function() {
        const firstFeed = [];

        // load feed and store the first feed 
        beforeEach(function(done) {
            // feed is loaded
            loadFeed(0, function() { 

                // the content of feed
                Array.from(feedArea.children).forEach(content => {
                    firstFeed.push(content.innerText);
                });
                
                // load again
                loadFeed(1, done);
            }); 
        });

        // Compare items against first feed
        it('change content', function() {
            const secondFeed = [];
            Array.from(feedArea.children).forEach((content, index) => {
                secondFeed.push(content.innerText);
                expect(secondFeed !== firstFeed[index]).toBe(true);
            });
        });
    });    
}());
