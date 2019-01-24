# Feed Reader Testing

## Table of Contents
- [Instructions](#instructions)
- [About Test](#about-test)
- [View this Project](#view-this-project)

## Instructions
This is a project of Front-End Web Developer Nanodegree by Udacity.
I wrote test codes using [Jasmine](https://jasmine.github.io/) and followed Udacity's [rubric](https://review.udacity.com/#!/rubrics/18/view). I used the provided [starter code](https://github.com/udacity/frontend-nanodegree-feedreader) by Udacity.


## About Test
Test code file is `feedreader.js` in 

### Test Suite "RSS Feeds"
This is the test for `allFeeds` definition:
* To check `allFeeds` is defined and not empty
* To check each `feed` has a URL defined and the URL is not empty
* To check each `feed` has a name defined and the name is not empty

### Test Suite "The Menu"
This is the test for menu:
* To check the menu element is hidden by default
* To check the menu is displayed when it's clicked and it hides when it's clicked again


### Test Suite "Initial Entries"
This is the test for initiating `loadFeed`:
* To check `loadFeed` is called and completes its work asynchronously
* To check the load feed has at least one content

### Test Suite ""New Feed Selection"
This is the test for loading a new feed:
* To check feed contents actually change when it's loaded again


## View This Project
1. Please download this project:
```
git clone https://github.com/misakimichy/feed-reader-testing.git
```

Or you can download ZIP file:
Click the green button 'Clone or download' above then select 'Download ZIP'


2. Open `index.html` on your browser
