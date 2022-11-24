# Fast-Scan Television (FSTV)

Fast-Scan Television is practically television over amateur radio.

I'm discussing NTSC analog video here, as the digital formats are more complicated for my dad and I to understand.

I started writing this article on 11/21/2022 and it's currently still being written. Each development will be added to a new page below:

<!-- tabs:start -->

## **11/21/2022**

### The spark

Sometime last week, my dad was asked about trying out fast scan TV instead of his usual slow scan TV (the latter of which is a much more popular form of amateur radio telegraphy).

He was interested, but didn't know where to start. So he asked me.

I've since made it an affinitive goal to get him set up with FSTV.

Here's what my journey has been like so far.

### The research

[This guy](https://www.hamtv.com/) is the first person to show up when you google "ham tv" and it's heavily dated/misleading sadly.

I don't want to blame the guy, it's just an old website that hasn't been updated in a while.

![Screenshot of the hamtv.com website](/img/hamtv.png)

Digging through the site shows that you would *require* a downconverter for receiving FSTV, which is not exactly true.

You can receive FSTV with anything that can pick up an NTSC signal on any frequency, such as an SDR with at least 400k bandwidth (see "[The attempts](#the-attempts)") or an old handheld radio/TV scanner.

The downconverter is only required if you want to pipe the signal into an NTSC TV or VCR in glorious analog form, but good luck finding one.

P.C. Electronics had stopped manufacturing downconverters and the only ones I could find were on eBay for $100+.

### The repeater

Our [local repeater](https://www.atn-tv.com/repeaters/nevada-chapter/mt-potosi-repeater) has input frequencies for 2441.5 MHz FM and 434.0 MHz VSB/AM with optional(?) DVB-T, and output frequencies for 1253.25 MHz VSB and 912.0 MHz FM.

As of writing this article, the repeaters have not had *any* activity yet. Hopefully they will soon.

![Screenshot of the repeater's website](/img/potosi.png)

Though as for the repeater's website, atn-tv.com, it's a lot more interesting.

It's a website for a group of ameteur radio operators who are interested in television broadcasting, known as Amateur Television Network (ATN).

They have a [YouTube channel](https://www.youtube.com/amateurtelevisionnetwork) with a live stream. Sometimes people come onto the stream, I'm not sure why or how, but it's quite interesting.

### The attempts

My dad and I have been working on getting NTSC signals to get picked up from about anything we had laying around the house for a while.

We brought in a CRT-based TV that was coincidentally about to be thrown out by a neighbor, and we hooked it up to a VCR, VHS camcorder, Super Nintendo, and an Xbox 360.

The TV turned out to work just fine, plus it had the ability to display raw noise and not cut off to blue with weak input.

![Photo of the TV](/img/PXL_20221120_025007322.jpg)

Alongside the CRT TV success, I was working on getting an [Airspy Mini](https://airspy.com/airspy-mini/) to recognize an NTSC signal from the Super Nintendo via RF.

Turns out that [SDRAngel](https://www.sdrangel.org/) works great for black and white signals when configured correctly.

![Photo of a TV signal picked up with an SDR](/img/PXL_20221121_021811586.jpg)

I was also able to pick up audio if I moved the SDR's frequency to somewhere between the video carrier and FM carrier.

Adding an FM demodulator, offsetting it, plus offsetting the video carrier, I was able to get a working NTSC signal and audio at the same time.

<iframe src="https://www.youtube.com/embed/iu2hjt5YBnQ" width="720" height="480" title="A YouTube video" frameborder="0" allowfullscreen></iframe>

This could come in really handy for my dad and I to get a better understanding of how NTSC works.

Especially if it could be used to receive FSTV, which is what we're trying to do.

### The future

I'm not sure what the future holds for us, but I'm sure we'll figure something out.

Having the ability to both transmit and receive FSTV would be a great way to learn more about amateur radio and television for me personally.

Many alike, I've always wanted to be on TV, and now I probably could be.

I'm not sure if my dad would be able to get the repeater to work, but we're determined to try.

I'll keep updating this article as I make progress.

I may write more details and in-depth instructions soon, especially for the SDR setup.

### References

* [Ham Radio TV](https://www.hamtv.com/)
* [Amateur Television Network](https://www.atn-tv.com/)
* [SDRAngel](https://www.sdrangel.org/)
* [Airspy Mini](https://airspy.com/airspy-mini/)

> [Next page: 11/24/2022](#the-progress)

## **11/24/2022**

### The progress

Two days ago, my dad talked with the [ATN-TV](https://www.atn-tv.com/) guys through their Whereby net/roundtable.

They were very helpful and gave him some tips on the equipment and how to set it up, alongside confirming that the repeater on Mount Potosi is still active.

They also talked about the repeater's input and output frequencies. Turns out, the repeater might have a different output frequency than what's listed on the website.

But at the very least, it's less complicated than we first thought.

### The downconverters

During the meeting, my dad shared a picture of two downconverters that we bought from eBay that hadn't yet arrived.

They were impressed that we managed to find them, given that they were "antiques" and supposedly working.

They're TVC-12G models and were made by P.C. Electronics in 1989.

Unfortunately, yesterday when we had received them, they didn't work.

![Photo of one of the downconverters](/img/PXL_20221124_020853760.jpg)

Here is what one of them looks like. Our specific models are *made* to downconvert 1.2 GHz, but they were modified to take an input of 1.8-2.0 GHz.

The downconverters are powered by 12V DC, and they have a 100 Ohm antenna input and a 75 Ohm TV output. One of them has a BNC connector for power(?) and the other has a 3.5mm jack. (the kind you'd find on a headphone jack)

We found out that they were modified by the previous owner before my dad bought them, given that they had a label with input and output frequencies that were out of range.

Though I believe that it's possible to re-modify at least one of them to work with the repeater's input frequencies once again. So, we took them apart.

![Photo of the inside of one the downconverters](/img/PXL_20221124_005938437~2.jpg)

This specific photo shows the inside of the downconverter with a BNC connector for power. The other one has a 3.5mm jack, but are otherwise identical aside from a few potentiometer values.

I labelled the potentiometers with colors and marked down some of their values:

![Photo of a notepad with the potentiometer values](/img/PXL_20221124_182851349.jpg)

The potentiometers are labeled as follows:

```plaintext
TVC12G W/BNC 12V DC:
    Red: 98.9 Ω
    Yellow: 0.2 Ω
    Blue: 97.6 Ω
    Green: 10.06 KΩ (468.3 Ω on other point)
    Purple: 0.2 Ω
TVC12G W/3.5mm 12V DC:
    Red: 106.6 Ω
    Yellow: N/A (didn't check)
    Blue: 99.2 Ω
    Green: 10.06 KΩ (471.98 Ω on other point)
    Purple: N/A (didn't check)
```

### The hookups

My dad hooked up each downconverter to their appropriate power source, antenna, and of course the CRT TV from before.

We were looking to see if the downconverters worked at all, but we couldn't find a signal on the TV, although it did flash a few times and caused some interference on channels 53 and 54.

The correct channel output frequency should be channel 7 or 8 (175.25 or 181.25 MHz video carrier), but we couldn't find anything.

After learning that channels 53 and 54 seemed to be affected by the downconverters, we hooked up the downconverters to an ICOM reciever (of which I don't know the model number) to view the output frequencies.

Turns out that a lot of frequencies were affected, we even managed to find airplane signals on lower frequencies, proving that it *is* downconverting.

We couldn't find the manual online, by the looks of it only [HAM TV](https://hamtv.com/) only provides them and you need to be a licensed amateur radio operator to get one.

Therefore, I personally can't email them, but my dad can. I'll make a new page with regards to that when possible.

### The current state

We're still trying to figure out how to get the downconverters to work, but we're not giving up.

Two days from now, we'd receive a handheld TV scanner that we ordered from eBay, so we'll see if that works.

Come December, we'll have a transmitter to get to Mount Potosi and try to get the repeater to work.

More progress will be shared over time, thank you for reading.

> [Previous page: 11/21/2022](#the-spark)

<!-- tabs:end -->

?> Last updated {docsify-updated}
