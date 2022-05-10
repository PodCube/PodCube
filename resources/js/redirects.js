var DefaultLanding = "https://pod.link/podcube"

var RedirectList = {

/*

                    ============ HOW TO USE =============

    THE FIRST PART IS WHAT COMES AFTER THE QUESTION MARK IN THE SHORTLINK.
    THE SECOND PART IS WHAT WEBSITE IT GOES TO.

    DO EVERYTHING HERE IN LOWERCASE, BUT THE SHORTLINKS THEMSELVES AREN'T CASE SENSITIVE

    For example, if you put this code in:

        PoopButton: "https://poop.com",

    You would be creating the following shortlink:

        PodCu.be?PoopButton

    And it would redirect to poop.com.


    YOU CAN MAKE TWO-PART SHORTLINKS. THEY LOOK LIKE THIS:

        PoopButton: { Poop: "https://poop.com", Pee: "https://pee.com" },

    The first part 'PoopButton' still comes after the question mark, but now you need to
    specify which SUB-link you want, by using an = sign.
    
    So what you've done by adding that code above is actually creating TWO short links:

        PodCu.be?PoopButton=Poop
        PodCu.be?PoopButton=Pee
    
    The first link will redirect to Poop.com, the second link redirects to Pee.com.

============================  EASY PEASY COPY PASTE ZONE  ======================================

COPY THE CODE YOU WANT BETWEEN THE DASHED LINES 
(BUT DONT INCLUDE THE DASHED LINES)

THEN PASTE IT BELOW THE BIG LINE AND CHANGE IT
TO WHATEVER YOU WANT.


SINGLE LINK:
----------------------------------------------------

LinkWord: "https://website.com",

----------------------------------------------------
(Will make a shortlink "PodCu.be?LinkWord" that goes to "website.com")


DOUBLE LINK:
----------------------------------------------------

    EpisodeName: {
        Audio: "https://website1.com",
        Video: "https://website2.com"
    },

----------------------------------------------------
(Will make two shortlinks: "PodCu.be?EpisodeName=Audio" that goes to "website1.com" AND "PodCu.be?EpisodeName=Name2" that goes to "website2.com")

*/// ============================== PASTE NEW SHORTLINK CODE BELOW THIS LINE! ========================================= \\\*

    e39:
    {
        audio: "https://pnc.st/s/pc/bd5eb302/fort-smith-ice-skating-rink-snowballs-jr-hockey-04-04-2051",
        video: "https://youtu.be/pOwfzd8uZlg"
    },

    e40:
    {
        audio: "https://pnc.st/s/pc/e95f82b4/monty-spumante-s-winery-private-tastings-04-14-2051",
        video: "https://youtu.be/0WQE0DsDmkY"
    },
  
      dentist:
    {
        audio: "https://pnc.st/s/pc/14401342/gift-horse-dental-waiting-room-04-25-2010",
        video: "https://youtu.be/sGimJCKQPGo"
    },
  
    news:
    {
        1: "https://www.getrevue.co/profile/podcube/issues/march-at-podcube-hq-1081247",
        2:"https://www.getrevue.co/profile/podcube/issues/april-at-podcube-hq-1172008"
    },

    // PODCATCHERS
    spotify: "https://open.spotify.com/show/2b9KFsTv1kW0IhXKnrNoov",
    apple: "https://podcasts.apple.com/us/podcast/podcube/id1589888955",
    podchaser: "https://www.podchaser.com/podcasts/podcube-1987127",



    // SOCIALS
    facebook: "https://facebook.com/podcube",
    youtube: "https://www.youtube.com/channel/UCjo7q-qSHg_8Zo8ln-W1X8w",
    twitter: "https://twitter.com/podcube",
    tiktok: "https://tiktok.com/@podcube",
    reddit: "https://reddit.com/user/PodCube",

    // OTHER STUFF
    donate: "https://www.paypal.com/donate/?hosted_button_id=P93ZFPQW5MY9A",
    artlist: "https://artlist.io/PodCube-2581898" //referral link, if someone buys an artlist sub with it we get free months!

    
}

