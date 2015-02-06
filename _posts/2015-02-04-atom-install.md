---
layout: post
category : installation
tags : [atom, fedora, editor]
title : Installing Atom editor on Fedora 21
---
{% include JB/setup %}

See the end of this post for the raw steps that worked for me.  The background
that lead there comes first.

While working on the course work and projects for the <a
href="https://www.udacity.com/">Udacity</a> <a
href="https://www.udacity.com/course/nd001">Frontend Web Developer
NanoDegree</a>, I got very tired of the nag screen from <a
href="http://www.sublimetext.com/">Sublime Text</a>.

Sublime text was the suggested text editor to use for anyone that did not have a
strong preference for something else.  It was used in the video examples, which
made using it one less thing to look different while comparing what I was doing,
with what the instructor was doing.  Once I was through the very basics though,
that pop-up regularly interrupting my work flow to ask me to register became
annoying.

The alternate editor suggestion was <a href="https://atom.io/">Atom</a>, the
*hackable* text editor created by GitHub.  An editor built on HTML, CSS, and
JavaScript appealed to me, so I figured to give it a try.  There were a few
problems along the way, but this documents what actually ended up working, with
references to some of the what and why.

###The starting environment
A fresh load of the 32bit <a href="https://getfedora.org/">Fedora 21
Workstation</a> distro spun up as a guest VM in VirtualBox running on Windows 7.
Just about the only thing added to that, was the VirtualBox Guest Additions, but
that required <a href="http://linux.die.net/man/8/dkms">dkms</a>, so the basic
software build tools were installed.  VirtualBox has a snapshot feature that
makes exploring alternate paths from a common starting state easy.  Once the
starting configuration is setup, just create a snapshot.  At a later time, that
snapshot can be restored to try something different from exactly the same
conditions.  I used that extensively while finding out what worked.  By the time
I got to the final working sequence, I had created, reverted, and deleted about
a dozen snapshots.

<a
href="http://linuxg.net/how-to-install-atom-0-124-0-on-fedora-20-systems/">LinuxG.net</a>
has a an article about how to install Atom on Fedora 20 systems, but it turned
out to both include unneeded steps, and to not work. I found <a
href="https://gist.github.com/mojavelinux/225d01e621f467db1c75">A Gist</a> with
similar instructions, but the comments pointed to some alternatives and
simplifications.  That also failed, but a web search using the error message
lead to <a href="https://github.com/atom/atom/issues/4285">, which said that a
newer version of node was needed, as well as the upgrade to npm mentioned in the
original installation articles.

During the searches for answers, I had looked at the main <a
href="http://nodejs.org/">NODE.JS</a> web site.  Since that was showing a newer
version than yum was installing, I figured I was avoid some of the install and
upgrade steps from the instructions I started with.  I would just add the
nodesource repo to yum, and install node.js from there.  Still not quite.  After
that install, software versions seemed to be where Atom needed them to be, but
the build failed on another missing build environment requirement.  Not being a
linux guru, I decided it was time to let the system do some of the work for me.
I reverted to the configuration snapshot after the installation of node and npm
from the fedora repositories.  Then used the instructions from the node.js site
to get the updated versions.  After a detour to remove some of the software that
yum had installed, … it actually worked!

First the local prerequisites.  Create a couple of folders to hold the cloned
Atom repository, and the installed version after it has been built.
{% highlight sh %}
mkdir -p ~/development/repos
sudo mkdir -p /opt/atom
sudo chown user:user /opt/atom
{% endhighlight %}

Make sure to change "*user:user*" to your own user and group name or number.

Now for the base software prerequisites.
{% highlight sh %}
sudo yum -y install node npm libgnome-keyring-devel
{% endhighlight %}

That currently installs gyp (which causes a conflict problem), node v0.10.33,
and npm v1.3.6.

Upgrade the software environment, and following instructions,
{% highlight sh %}
sudo -i
curl -sL https://rpm.nodesource.com/setup | bash -
yum remove nodejs npm
yum install nodejs
yum remove gyp
exit
{% endhighlight %}

The prerequisites for building Atom are now all in place.  Just need to get the
source, do the build, and install.
{% highlight sh %}
cd ~/development/repos/
git clone https://github.com/atom/atom
cd atom
./script/build
script/grunt install --install-dir /opt/atom
sudo ln -s /opt/atom/bin/atom /usr/local/bin
{% endhighlight %}

Now *atom* is available for the whole system.  Although I did not cleanup the
ownership of the installed code.  The installation folder is still owned by the
local user instead of root.
