/* eslint-disable */
var break1 = '767px';

// These functions are used to disable and enable body scroll when the specifications search form is toggled
function disableBodyScroll(){
  document.body.style.height = '100vh';
  document.body.style.overflow = 'hidden';
}

function enableBodyScroll(){
  document.body.style.height = 'auto';
  document.body.style.overflow = 'auto';
}

// These variables are used as flags and checks
// This is set everytime the 'Back To Results' link is clicked and is checked when the specifications search form loads
var backToResultsFlag = false;
// This is only true on initial page load
var initialLoadFlag = true;

function SpecSearch() {
  this.app = document.querySelector('.specs-app');
  this.form = this.app.querySelector('[data-specs-search="form"]');
  this.results = this.app.querySelector('[data-specs-search="results"]');

  // This first checks to see if the initialLoadFlag was set. This flag is set on page load and is never set again until the page is reloaded
  // Then it checks the backToResultsFlag. If that flag was set, it means that the 'Back To Results' link on the individual specifications page was clicked. It's important to check if it's mobile because we only want the form collapsing when going back to search results in mobile view
  // Otherwise, do nothing special
  this.initialize = function() {
    if (initialLoadFlag === true){
      this.expandForm();
      initialLoadFlag = false;
    }
    else if (backToResultsFlag === true && window.matchMedia('(max-width: ' + break1 + ')').matches){
      this.collapseForm();
      this.form.classList.add('specs-search--no-transition');
      backToResultsFlag = false;
    }
  }

  // Checks if specification search form is expanded
  this.isFormExpanded = function() {
    if (this.form.dataset.specsSearchStatus === 'expanded') return true;
  }

  this.toggleForm = function() {
    // The form may have this class if the backToResultsFlag was set, if it does, remove it
    if (this.form.classList.contains('specs-search--no-transition')) this.form.classList.remove('specs-search--no-transition');

    if (this.isFormExpanded()) this.collapseForm();
    else this.expandForm();
  }

  this.collapseForm = function() {
    this.form.dataset.specsSearchStatus = 'collapsed';
    this.form.classList.add('specs-search--collapsed');

    // 800ms comes from the transition duration of the specs-search--search-page class
    setTimeout(function() {
      enableBodyScroll();
    }, 800);
  }

  this.expandForm = function() {
    this.form.dataset.specsSearchStatus = 'expanded';
    this.form.classList.remove('specs-search--collapsed');
    var app = this.app;

    // The specifications search app and individual specification pages exist on one template (page_specifications_search.php)
    // we need to check if the specification search results container exist (.ng-spec-search), otherwise it will disable scroll on the individual specs pages
    setTimeout(function() {
      var form = app.querySelector('[data-specs-search="form"]');

      if (app && window.matchMedia('(max-width:' + break1 + ')').matches && app.querySelector('.ng-spec-search')) {
        disableBodyScroll();
      }
      else if (app && form) {
        form.style.paddingTop = '2.5rem';
        enableBodyScroll();
      }
    }, 800, app); // 800ms comes from the transition duration of the specs-search--search-page class
  }
}
