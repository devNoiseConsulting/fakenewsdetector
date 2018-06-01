const authorCleanup = (author) => {
  remove = new RegExp(/^By (.*), CNN/);
  return author.replace(remove, '$1');
};

const site = () => {
  console.log('DEBUG: CNN site function');
};

export default {
  corp: [
    "cnn.com",
    "bleacherreport.com",
    "cnn.it",
    "cnnnewsource.com",
    "turner.com",
    "turnerjobs.com"
  ],
  advertizer: [
    "lendingtree.com",
    "truthfinder.com",
    "drmartypets.com",
    "privacy-protector.org",
    "icepop.com",
    "everquote.com",
    "aarp.org",
    "bankrate.com",
    "fool.com",
    "myfinance.com",
    "outbrain.com",
    "doubleclick.net",
    "clickntrax.com",
    "tinytrk.com",
    "trend-chaser.com",
    "rakuten.today",
    "energybillcruncher.com",
    "joinhoney.com"
  ],
  ignore: ["instagram.com", "yahoo.com", "twitter.com", "facebook.com"],
  articleSelector: 'div[itemprop="articleBody"] a',
  authorSelector: [
    ".metadata__byline__author a",
    ".metadata__byline__author",
    ".cnnbyline .byline"
  ],
  authorCleanup,
  site
};
