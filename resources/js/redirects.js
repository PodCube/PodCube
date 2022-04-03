var DefaultLanding = "https://pod.link/podcube"

var RedirectList = {
/*

                    ============ HOW TO USE =============

    THE FIRST PART IS WHAT COMES AFTER THE QUESTION MARK IN THE SHORTLINK.
    THE SECOND PART IS WHAT WEBSITE IT GOES TO.

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

    LinkWord: {
        Name1: "https://website1.com",
        Name2: "https://website2.com"
    },

----------------------------------------------------
(Will make two shortlinks: "PodCu.be?LinkWord=Name1" that goes to "website1.com" AND "PodCu.be?LinkWord=Name2" that goes to "website2.com")

*/// ============================== PASTE NEW SHORTLINK CODE BELOW THIS LINE! ========================================= \\\*

    39:
    {
        audio: "https://pnc.st/s/pc/bd5eb302/fort-smith-ice-skating-rink-snowballs-jr-hockey-04-04-2051",
        video: "https://youtu.be/pOwfzd8uZlg"
    },

    news:
    {
        1: "https://www.getrevue.co/profile/podcube/issues/march-at-podcube-hq-1081247"
    },

    // SOCIALS
    facebook: "https://facebook.com/podcube",
    youtube: "https://www.youtube.com/channel/UCjo7q-qSHg_8Zo8ln-W1X8w",
    twitter: "https://twitter.com/podcube",
    tiktok: "https://tiktok.com/@podcube",
    reddit: "https://reddit.com/user/PodCube",

    // OTHER STUFF
    donate: "https://www.paypal.com/donate/?hosted_button_id=P93ZFPQW5MY9A"
    
}

