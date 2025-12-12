var i = 0;
var startAnim = false;
var SoundPlaying = false;
var p1END = false;
var p2END = false;
const HButton = document.getElementById("press3");
const resizeObserver = new ResizeObserver(() => {
  numericWidth = parseInt(window.getComputedStyle(HButton).width);
});
var numericWidth = parseInt(numericWidth);
const myDiv = document.getElementById("lowerbright");
function extrasounds() {
  document.getElementById("SR1").pause();
  document.getElementById("SR2").pause();
  document.getElementById("SR3").pause();
  document.getElementById("SR4").pause();
  document.getElementById("SR5").pause();
  document.getElementById("SR6").pause();
  document.getElementById("SR7").pause();
}
function helpresp() {
  document.getElementById("menu").volume = 0.05;
  if (i === 0 && !SoundPlaying && numericWidth > 500 && !p1END && !p2END) {
    SoundPlaying = true;
    i++;
    document.getElementById("SR1").play();
    document.getElementById("SR1").addEventListener(
      "ended",
      () => {
        SoundPlaying = false;
        console.log(i);
        document.getElementById("menu").volume = 0.3;
        document.getElementById("press").classList.remove("gone");
        document.getElementById("press2").classList.remove("gone");
        bgNoise();
      },
      { once: true }
    );
  } else if (i === 1 && !SoundPlaying && !p1END && !p2END) {
    SoundPlaying = true;
    i--;
    document.getElementById("SR2").play();
    document.getElementById("SR2").addEventListener(
      "ended",
      () => {
        SoundPlaying = false;
        console.log(i);
        document.getElementById("menu").volume = 0.3;
      },
      { once: true }
    );
  }
  if (i === 0 && !SoundPlaying && numericWidth <= 500 && !p1END && !p2END) {
    i++;
    SoundPlaying = true;
    document.getElementById("SR3").play();
    document.getElementById("SR3").addEventListener(
      "ended",
      () => {
        SoundPlaying = false;
        console.log(i);
        document.getElementById("menu").volume = 0.3;
        document.getElementById("press").classList.remove("gone");
        document.getElementById("press2").classList.remove("gone");
        document.getElementById("menu").loop = true;
        document.getElementById("menu").play();
      },
      { once: true }
    );
  }
  if (i === 0 && !SoundPlaying && p1END && !p2END) {
    i++;
    document.getElementById("SR4").play();
    document.getElementById("SR4").addEventListener(
      "ended",
      () => {
        SoundPlaying = false;
        console.log(i);
        document.getElementById("menu").volume = 0.3;
      },
      { once: true }
    );
  } else if (!SoundPlaying && i === 1 && p1END && !p2END) {
    i--;
    SoundPlaying = true;
    document.getElementById("SR2").play();
    document.getElementById("SR2").addEventListener(
      "ended",
      () => {
        SoundPlaying = false;
        console.log(i);
        document.getElementById("menu").volume = 0.3;
      },
      { once: true }
    );
  }
  if (i === 0 && !SoundPlaying && !p1END && p2END) {
    i++;
    SoundPlaying = true;
    document.getElementById("SR5").play();
    document.getElementById("SR5").addEventListener(
      "ended",
      () => {
        SoundPlaying = false;
        i++;
        console.log(i);
        document.getElementById("menu").volume = 0.3;
      },
      { once: true }
    );
  } else if (!SoundPlaying && i === 1 && !p1END && p2END) {
    i--;
    SoundPlaying = true;
    document.getElementById("SR2").play();
    document.getElementById("SR2").addEventListener(
      "ended",
      () => {
        SoundPlaying = false;
        console.log(i);
        document.getElementById("menu").volume = 0.3;
      },
      { once: true }
    );
  }
  if (i === 0 && !SoundPlaying && p1END && p2END) {
    i++;
    SoundPlaying = true;
    document.getElementById("SR6").play();
    document.getElementById("SR6").addEventListener(
      "ended",
      () => {
        SoundPlaying = false;
        console.log(i);
        document.getElementById("menu").volume = 0.3;
      },
      { once: true }
    );
  } else if (!SoundPlaying && i === 1 && p1END && p2END) {
    i--;
    SoundPlaying = true;
    document.getElementById("SR7").play();
    document.getElementById("SR7").addEventListener(
      "ended",
      () => {
        SoundPlaying = false;
        console.log(i);
        document.getElementById("menu").volume = 0.3;
      },
      { once: true }
    );
  }
}

function start1() {
  i = 0;
  document.getElementById("boop").play();
  document.getElementById("press").classList.add("gone");
  document.getElementById("press2").classList.add("gone");
  document.getElementById("press3").classList.add("gone");
  extrasounds();
  startAnim = true;

  let brightnessValue = 1.0;
  const decreaseAmount = 0.005;
  const minBrightness = 0;
  let animationFrameId;

  function decreaseBrightness() {
    brightnessValue -= decreaseAmount;

    if (brightnessValue <= minBrightness) {
      brightnessValue = minBrightness;
      cancelAnimationFrame(animationFrameId);
      bgNoise();
      setTimeout(swapBg, 500);
      setTimeout(resetBrightness, 3000);
      setTimeout(firstChangingImage, 2950);
      setTimeout(secondChangingImage, 2500);
      setTimeout(thirdChangingImage, 12000);
      return;
    }

    myDiv.style.filter = `brightness(${brightnessValue})`;
    animationFrameId = requestAnimationFrame(decreaseBrightness);
  }

  animationFrameId = requestAnimationFrame(decreaseBrightness);
}

function swapBg() {
  myDiv.classList.remove("BigScreen");
  myDiv.classList.remove("PiratesCOVE");
  myDiv.classList.add("Office");
}
function resetBrightness() {
  const myDiv = document.getElementById("lowerbright");
  myDiv.style.filter = "brightness(1.0)"; // back to 100%
}

function firstChangingImage() {
  document.getElementById("imgchange2").style.height = "10%";
  document.getElementById("imgchange2").style.width = "10%";
  document.getElementById("imgchange2").style.top = "48%";
  document.getElementById("imgchange2").style.left = "40.5%";
  document.getElementById("imgchange").classList.remove("invisible");
  document.getElementById("imgchange").classList.add("Computer");
  document.getElementById("r1").play();
}

function secondChangingImage() {
  document.getElementById("imgchange2").classList.remove("invisible");
  document.getElementById("imgchange2").classList.add("Security2");
}

function thirdChangingImage() {
  document.getElementById("imgchange3").classList.remove("laff");
  document.getElementById("imgchange3").classList.add("Phone");
  document.getElementById("imgchange3").classList.remove("invisible");
  document.getElementById("imgchange3").classList.add("fly-forward");
  document.getElementById("call").play();
  document.getElementById("call").volume = 0.7;
  setTimeout(scg, 6000);
}

function scg() {
  document.getElementById("ans").play();
  document.getElementById("imgchange3").classList.remove("Phone");
  document.getElementById("imgchange3").classList.add("Guard");
      document.getElementById("imgchange3").style.top = "100%";
  r2();
  function r2() {
    document.getElementById("r2").play();
    setTimeout(res1, 6000);
  }
  function res1() {
    document.getElementById("res1").play();
    setTimeout(r3, 8000);
  }
  function r3() {
    document.getElementById("r3").play();
    setTimeout(res2, 8000);
  }
  function res2() {
    document.getElementById("res2").play();
    setTimeout(r4, 3500);
  }
  function r4() {
    document.getElementById("r4").play();
    setTimeout(res3, 8000);
  }
  function res3() {
    document.getElementById("res3").play();
    setTimeout(r5, 4500);
  }
  function r5() {
    document.getElementById("r5").play();
    setTimeout(bye, 2500);
  }
}

function bye() {
  document.getElementById("o13").play();
  myDiv.classList.remove("Office");
  document.getElementById("imgchange").classList.remove("Computer");
  document.getElementById("imgchange3").classList.remove("Guard");
  myDiv.classList.add("BigScreen");
  document.getElementById("imgchange2").style.height = "75%";
  document.getElementById("imgchange2").style.width = "80%";
  document.getElementById("imgchange2").style.top = "9%";
  document.getElementById("imgchange2").style.left = "9%";
  setTimeout(BacktoOff, 3200);
  setTimeout(res5, 5000);
}

function res5() {
  document.getElementById("o4").play();
  setTimeout(r6, 2250);
}

function r6() {
  document.getElementById("o14").play();
  setTimeout(r7, 7000);
  setTimeout(StaticDoor, 6000);
}

function r7() {
  document.getElementById("o15").play();
  setTimeout(FoxReact, 4250);
}
function FoxReact() {
  document.getElementById("mad1").play();
  setTimeout(FoxReact2, 2500);
  function FoxReact2() {
    document.getElementById("mad2").play();
    setTimeout(r8, 2500);
  }
}
function r8() {
  document.getElementById("r10").play();
  setTimeout(Teehee, 1500);
}
function BacktoOff() {
  myDiv.classList.remove("BigScreen");
  myDiv.classList.add("Office");
  document.getElementById("imgchange2").style.height = "10%";
  document.getElementById("imgchange2").style.width = "10%";
  document.getElementById("imgchange2").style.top = "48%";
  document.getElementById("imgchange2").style.left = "40.5%";
  document.getElementById("imgchange").classList.add("Computer");
  setTimeout(g1st, 3000);
}

function StaticDoor() {
  document.getElementById("imgchange4").classList.add("Door2");
  document.getElementById("imgchange4").classList.remove("invisible");
  document.getElementById("slam").play();
}
function g1st() {
  document.getElementById("imgchange3").classList.add("Guard");
}

function Teehee() {
  document.getElementById("imgchange3").classList.remove("Guard");
  document.getElementById("imgchange3").classList.add("Haha");
  function actlaugh() {
    document.getElementById("laff").volume = 0.4;
    document.getElementById("laff").play();
  }
  setTimeout(actlaugh, 250);
  setTimeout(sad, 4000);
}
function sad() {
  document.getElementById("imgchange5").classList.remove("invisible");
  document.getElementById("imgchange5").classList.add("SadFox");
  document.getElementById(":/").volume = 0.4;
  document.getElementById(":/").play();
  setTimeout(r9, 5000);
}
function r9() {
  document.getElementById("o16").play();
  setTimeout(endp1, 5000);
}

function endp1() {
  p1END = true;
  startAnim = false;
  let brightnessValue = 1.0;
  const decreaseAmount = 0.005;
  const minBrightness = 0;
  let animationFrameId;
  document.getElementById("imgchange").classList.add("invisible");
  document.getElementById("imgchange2").classList.add("invisible");
  document.getElementById("imgchange3").classList.add("invisible");
  document.getElementById("imgchange4").classList.add("invisible");
  document.getElementById("imgchange5").classList.add("invisible");

  function decreaseBrightness() {
    brightnessValue -= decreaseAmount;

    if (brightnessValue <= minBrightness) {
      brightnessValue = minBrightness;
      cancelAnimationFrame(animationFrameId);
      bgNoise();
      setTimeout(swapBg2, 500);
      setTimeout(resetBrightness2, 7000);
      return;
    }

    myDiv.style.filter = `brightness(${brightnessValue})`;
    animationFrameId = requestAnimationFrame(decreaseBrightness);
  }

  animationFrameId = requestAnimationFrame(decreaseBrightness);
}
function swapBg2() {
  document.getElementById("imgchange3").classList.remove("Haha");
  myDiv.classList.remove("Office");
  myDiv.classList.remove("BigScreen");
  myDiv.classList.add("PiratesCOVE");
  document.getElementById("res?").play();
}

function resetBrightness2() {
  const myDiv = document.getElementById("lowerbright");
  myDiv.style.filter = "brightness(1.0)"; // back to 100%
  document.getElementById("press").classList.remove("gone");
  document.getElementById("press2").classList.remove("gone");
  document.getElementById("press3").classList.remove("gone");
  bgNoise();
}

function start2() {
  i = 0;
  startAnim = true;
  document.getElementById("boop").play();
  document.getElementById("press").classList.add("gone");
  document.getElementById("press2").classList.add("gone");
  document.getElementById("press3").classList.add("gone");
  let brightnessValue = 1.0;
  const decreaseAmount = 0.005;
  const minBrightness = 0;
  let animationFrameId;

  function decreaseBrightness() {
    brightnessValue -= decreaseAmount;

    if (brightnessValue <= minBrightness) {
      brightnessValue = minBrightness;
      cancelAnimationFrame(animationFrameId);
      setTimeout(swapBg, 500);
      setTimeout(resetBrightness, 3000);
      function resetBrightness() {
        const myDiv = document.getElementById("lowerbright");
        myDiv.style.filter = "brightness(1.0)"; // back to 100%
        myDiv.classList.remove("Office");
        myDiv.classList.add("BigScreen");
        document.getElementById("r20").play();
        document.getElementById("o6").play();
        fifthChangingImage();
      }
      bgNoise();
      function swapBg() {
        myDiv.classList.remove("PiratesCOVE");
        myDiv.classList.remove("Office");
        myDiv.classList.add("BigScreen");
      }
      return;
    }

    myDiv.style.filter = `brightness(${brightnessValue})`;
    animationFrameId = requestAnimationFrame(decreaseBrightness);
  }

  animationFrameId = requestAnimationFrame(decreaseBrightness);
}

function fifthChangingImage() {
  document.getElementById("imgchange3").classList.remove("invisible");
  document.getElementById("imgchange2").classList.remove("invisible");
  document.getElementById("imgchange2").classList.add("FoxWalk");
  document.getElementById("imgchange2").style.height = "75%";
  document.getElementById("imgchange2").style.width = "80%";
  document.getElementById("imgchange2").style.top = "9%";
  document.getElementById("imgchange2").style.left = "9%";
  setTimeout(sixthChangingImage, 10000);
}

function sixthChangingImage() {
  document.getElementById("imgchange").classList.remove("invisible");
  document.getElementById("imgchange").classList.add("Computer");
  document.getElementById("imgchange2").classList.remove("FoxWalk");
  myDiv.classList.remove("BigScreen");
  myDiv.classList.add("Office");
  document.getElementById("imgchange2").classList.add("invisible");
  setTimeout(o17, 1500);
  function o17() {
    document.getElementById("o17").play();
    setTimeout(seventhChangingImage, 5000);
  }
}

function seventhChangingImage() {
  document.getElementById("imgchange2").style.height = "100vh";
  document.getElementById("imgchange2").style.width = "100vw";
  document.getElementById("imgchange2").style.left = "0%";
  document.getElementById("imgchange2").style.top = "0%";
  document.getElementById("imgchange2").classList.remove("invisible");
  document.getElementById("imgchange2").classList.add("Jumpscare");
  document.getElementById("imgchange2").classList.remove("FoxWalk");
  document.getElementById("imgchange2").classList.remove("Security2");
  document.getElementById("imgchange3").style.top = "45%";
  document.getElementById("rizz").play();
  setTimeout(still, 700);
  function still() {
    document.getElementById("imgchange2").classList.add("FoxJ");
    document.getElementById("imgchange2").classList.remove("Jumpscare");
    setTimeout(o7, 6500);
    setTimeout(hangup, 10500);
    setTimeout(boom, 12500);
  }
  function o7() {
    document.getElementById("o7").play();
  }
  function hangup() {
    document.getElementById("leave").play();
  }
  function boom() {
    document.getElementById("boom").play();
  }
  setTimeout(back, 18500);
}
function back() {
  one();
}
function one() {
  document.getElementById("imgchange2").classList.remove("FoxJ");
  document.getElementById("imgchange3").classList.add("Guard");
  document.getElementById("boom").play();
  setTimeout(two, 3700);
}
function two() {
  document.getElementById("imgchange3").classList.add("invisible");
  document.getElementById("imgchange2").classList.add("FoxJ");
  document.getElementById("boom").play();
  setTimeout(three, 3700);
}
function three() {
  document.getElementById("imgchange3").classList.remove("invisible");
  document.getElementById("imgchange2").classList.remove("FoxJ");
  document.getElementById("boom").play();
  setTimeout(four, 3700);
}
function four() {
  document.getElementById("imgchange3").classList.remove("invisible");
  document.getElementById("imgchange2").classList.remove("FoxJ");
  document.getElementById("o18").play();
  setTimeout(five, 4000);
}

function five() {
  document.getElementById("imgchange3").classList.add("invisible");
  document.getElementById("imgchange2").classList.add("FoxJ");
  document.getElementById("yum").play();
  setTimeout(final, 2000);
}

function final() {
  document.getElementById("imgchange2").classList.add("Jumpscare");
  document.getElementById("imgchange2").classList.remove("FoxJ");
  setTimeout(boo, 600);
  setTimeout(bg, 1000);
}

function boo() {
  document.getElementById("RAWR").play();
}
function bg() {
  document.getElementById("imgchange2").classList.remove("Jumpscare");
  endp2();
}
function endp2() {
  p2END = true;
  startAnim = false;
  let brightnessValue = 1.0;
  const decreaseAmount = 0.005;
  const minBrightness = 0;
  let animationFrameId;
  document.getElementById("imgchange").classList.add("invisible");
  document.getElementById("imgchange2").classList.add("invisible");
  document.getElementById("imgchange4").classList.add("invisible");
  document.getElementById("imgchange5").classList.add("invisible");

  function decreaseBrightness() {
    brightnessValue -= decreaseAmount;

    if (brightnessValue <= minBrightness) {
      brightnessValue = minBrightness;
      cancelAnimationFrame(animationFrameId);
      document.getElementById("Offis").pause();
      setTimeout(swapBg3, 500);
      setTimeout(SeclastAud, 5000);
      setTimeout(resetBrightness2, 25000);
      document.getElementById("bleep").play();
      return;
    }

    myDiv.style.filter = `brightness(${brightnessValue})`;
    animationFrameId = requestAnimationFrame(decreaseBrightness);
  }

  animationFrameId = requestAnimationFrame(decreaseBrightness);
}

function swapBg3() {
  myDiv.classList.remove("Office");
  myDiv.classList.remove("BigScreen");
  myDiv.classList.add("PiratesCOVE");
}

function SeclastAud() {
  document.getElementById("message").play();
  setTimeout(LastAud, 19000);
}
function LastAud() {
  document.getElementById("off").play();
}

function bgNoise() {
  if (startAnim) {
    document.getElementById("menu").pause();
    document.getElementById("Offis").loop = true;
    document.getElementById("Offis").play();
    document.getElementById("Offis").volume = 0.08;
  } else if (!startAnim) {
    document.getElementById("Offis").pause();
    document.getElementById("menu").loop = true;
    document.getElementById("menu").play();
    document.getElementById("menu").volume = 0.3;
  }
}

resizeObserver.observe(HButton);

