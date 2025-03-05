# How to receive Fast-Scan TV with an SDR

This guide will show you how to receive Fast-Scan TV (FSTV) with an SDR.

Compatible SDR devices must have a bandwidth of at least 400 kHz. (The more bandwidth, the better - 400 kHz will get you a crappy picture, but it will work.)

For audio, your SDR would require a bandwidth of about 5-6 mHz.

## Requirements

Required devices and software are as follows:

- Rx SDR device such as an [RTL-SDR](https://www.rtl-sdr.com), [Airspy (Mini+)](https://airspy.com), [HackRF](https://greatscottgadgets.com/hackrf), etc.
- Antenna connected to the SDR device
- A [local ATV repeater](https://www.atn-tv.com/repeaters) (or any NTSC/PAL TV transmission)
- [SDRAngel](https://www.sdrangel.org
- Any necessary drivers for your SDR device
- A (fast) computer capable of running SDRAngel and your SDR device

## Setup

First, you'll need to connect your antenna to your SDR device.

This is probably something you've already done, but if you haven't, you can find instructions for your SDR device on the manufacturer's website.

Next, you'll need to download and install [SDRAngel](https://www.sdrangel.org).

You'll also need to download and install any necessary drivers for your SDR device.

Once you've done that, you can launch SDRAngel.

## Configuration

### Add SDR device

For SDRangel to work with your SDR device, you'll need to configure it.

To do this, click on the **Add Rx Device** button in the top left corner of the window.

![Add Rx Device](/img/rx-device.png)

This will open a window that will allow you to choose an SDR device.

Select your SDR device from the list and click **OK**.

### Add channels

Next, you'll need to add channels to your device.

In the top left corner of the *R:0* window, click on the **Add channels** button.

![Add channels](/img/add-channels.png)

This will allow you to add the **ATV Demodulator** channel in a new window.

![ATV Demodulator](/img/atv-demodulator.png)

#### FM Demodulator

If your SDR device supports at least 5 MHz of bandwidth, you can use the **FM Demodulator** channel to demodulate the audio along with the video.

The video signal will become degrated as the bandwidth is reduced to make room for the audio, but it will still be watchable.

Add the **FM Demodulator** channel by clicking on the **Add channels** button in the top left corner of the *R:0* window, as before.

### ATV Demodulator

The **ATV Demodulator** channel will demodulate the video signal.

Tune to the video carrier frequency and adjust the bandwidth to match the video signal.

For my setup, I will use an Airspy Mini with a 6 MHz bandwidth and a frequency of *61.25 MHz* (channel 3).

I will be attempting to capture a video signal from a Super Nintendo, as my local repeater is not currently broadcasting.

You can find standard video carrier frequencies for broadcast channels from [Wikipedia](https://en.wikipedia.org/wiki/Pan-American_television_frequencies).

#### Audio offsets

If you're also receiving audio as specified above, you must tune offsets as the audio carrier frequency is usually 4 to 5 MHz above the video carrier frequency.

For channel 3, the audio carrier frequency is *65.75 MHz* and is 4.5 MHz above the video carrier frequency.

Just tune between the video and audio carrier frequencies until both carriers are visible in the waterfall.

In which case, I would tune to *63.5 MHz* and offset the video carrier by *-2.25 MHz* and the audio carrier by *+2.25 MHz*.

#### Video settings

The **ATV Demodulator** channel has a few settings that you can adjust to improve the quality and format of the video.

For example, the default modulation is **FM 1** and can be changed to **AM** (which is used for standard broadcast television).

NTSC video can be decoded by setting the settings as follows:

- **Modulation type**: AM
- **Nominal numbers of lines per frame**: 525
- **Frames per second**: 30
- **TV standard scheme**: PAL525
- **HSync**: True
- **VSync**: True

You may need to toggle the **Inv** checkbox to invert the video signal if needed.

The **Synch** slider is used to change the horizontal sync position, you must use trial and error to find the correct value as every set-up is different.

The **Black lvl** slider is used to adjust the black level of the video signal, usually the default value is too high and you must lower it to see the video.

You can adjust the **Asymmetrical filter opposite band cutoff** and **Asymmetrical filter in band cutoff / Decimator filter cutoff** sliders to fit within the bandwidth of your SDR device.

## Getting a signal

Once you've configured your SDR device, you can start receiving signals.

Here's what kind of signal I'm getting with my setup:

<iframe src="https://www.youtube.com/embed/iu2hjt5YBnQ" width="720" height="480" title="A YouTube video" frameborder="0" allowfullscreen></iframe>

## Troubleshooting

### SDRAngel crashes when adding an Rx device

This happened to me when reproducing this set-up on a different computer.

It occurs when you have two or more monitors and SDRAngel does not start on the main monitor.

To fix this, you must move SDRAngel to the main monitor, close it, and then re-open it.

Otherwise, use **Win+P** and turn off your secondary monitor.

## References

- [SDRAngel](https://www.sdrangel.org)
- [RTL-SDR](https://www.rtl-sdr.com)
- [Airspy](https://airspy.com)
- [HackRF](https://greatscottgadgets.com/hackrf)
- [Wikipedia - Pan-American television frequencies](https://en.wikipedia.org/wiki/Pan-American_television_frequencies)
- [ATN-TV - ATV Repeaters](https://www.atn-tv.com/repeaters)
