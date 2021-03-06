# 1.5.4

### 🚀 New Feature

- The "You're about to send a whisper." warning can now be temporarily hidden by holding the `Alt` key when writing a whisper.

# 1.5.3

### 🐛 Bug Fix

- When entering your own channel, moderation tools now appear immediately.

# 1.5.2

### 🚀 New Feature

- Emotes auto-completion now tries to respect case first ([#6](https://github.com/HiDeoo/YaTA/issues/6) - [tollus](https://github.com/tollus)).

# 1.5.1

### 🐛 Bug Fix

- Fix an issue with Github issue previews linking to the repo instead of the issues.
- Fix a UI only issue when trying to edit a locked shortcut.

# 1.5.0

### 🚀 New Feature

- Rework settings UI.
- Shortcuts have landed! 🛬
  - Find all the available shortcuts in the settings.
  - Shortcuts are customizable.
  - You can also use the `?` key as expected to peek at the shortcuts.

# 1.4.0

### 🚀 New Feature

- Overhaul the login UI to better showcase actual features.
- Names from the username history can now be copied when clicking them.
- Markers can now be added using the `Alt` + `m` shortcut.

# 1.3.2

### 🐛 Bug Fix

- Fix an issue leading to some moderators being temporarily not recognized as such.
- Use the username color in the chatter details dialog.

# 1.3.1

### 🚀 New Feature

- Add a button to follow or unfollow the current channel in the channel details dialog.

# 1.3.0

### 🚀 New Feature

- Give some well-deserved attention to the homepage:
  - admArt the whole thingy.
  - You can now sort streams by number of viewers, uptime, descending or ascending order, you name it.
  - All these preferences are persistent and automatically saved just like you would expect.

### 🐛 Bug Fix

- Fix an issue limiting the number of streams or channels to be displayed on the homepage at 100.

# 1.2.2

### 🐛 Bug Fix

- Fix an issue with some Github link previews.

### ⚙️ Internal

- Fire the guy who wrote the 1000+ lines of code removed in this version.

# 1.2.1

### 🚀 New Feature

- Add the `/shrug` snippet because ¯\\\_(ツ)\_/¯ (this will show in-place so you can see the actual message you're about to send).
- When streaming, your own stream now appears at the first position on the homepage.
- Use the official [Twitch Status page](https://devstatus.twitch.tv/) in the broadcaster tools.

# 1.2.0

### 🚀 New Feature

- Why leave this comfy place? Clips now open in-app instead of opening in a new window or tab.
- Add new broadcaster tools:
  - Edit channel metadata.
  - Quickly unhost or run commercials, check Twitch status, etc.
  - Check your channel and stream statistics.
  - Take a look at your recent clips, who is hosting you, etc.

# 1.1.0

### 🚀 New Feature

- Add a button to copy all messages from a user history.
- Quote messages by `Alt` clicking them.
- Add follow status (and follow age if following) in the channel details view.
- Add the `/followed` command.
- Offer plastic surgery to scrollbars (Firefox is still [afraid after 18 years](https://bugzilla.mozilla.org/show_bug.cgi?id=77790) & didn't show up at the appointment).
- The username history no longer requires to open a new website and is now directly visible in the application.
- You can now follow / unfollow users directly from the chatter details dialog.
- All commands can now be used with their dot equivalent without any issues (`.command` instead of `/command`).
- Clicking the video preview in the channel details will now popout the video player (still muted).
- Add a button to report users from the chatter details dialog.

### 🐛 Bug Fix

- Fix a line break issue when copying multiple messages from the chatter details view or the search panel.
- Fix an issue when copying messages with emotes.
- Remove a slight delay when closing some dialogs with animations turned off.
- Fix changelog readability issues when using the white theme.

# 1.0.0

### 🚀 New Feature

- Numbers are now properly formatted according to your locale across the application.
- Improve revamped channel details panel introduced in `0.9.0`:
  - Improve navigation UI.
  - Improve channel description readability.
  - Links in channel description now opens in a new tab / window.
  - Vods & clips can be clicked more easily.
  - The stream thumbnail can be clicked to get a Twitch player to quickly check status, sound & quality (muted by default & closing this view will stop the player).

# 0.9.0

### 🚀 New Feature

- Add a quick way to switch from a channel to another with the `Alt` + `p` shortcut.
- Revamp channel details panel to reduce even more the need of the Twitch website:
  - Basic infos are more visible.
  - Include channel description (text below the video player) which is very useful to look at chat rules, streamer infos, social links, schedule, etc.
  - Show last 10 vods instead of only 3.
  - Include top clips & recent clips.

### 🐛 Bug Fix

- Fix auto-completion of users having a localized display name.
- Fix an issue with Twitch emotes & emojis in sent messages ([#3](https://github.com/HiDeoo/YaTA/issues/3)).
- Fix a Firefox issue with emotes rendering that could lead to empty lines.

# 0.8.0

### 🚀 New Feature

- Hosts & auto-hosts thresholds can now be configured independently.
- Uploaded images can now be deleted easily.
- Improve UI when dropping an image to upload with new _blazing-fast_ animations.
- Add a new highlights setting to highlight all messages from specific users.
- Add a help section for actions.

### 🐛 Bug Fix

- Fix an issue that could lead to have some multiple lines messages overlapping.
- Improve overall chat performance by caching more computation results.
- Fix an issue preventing to drag & drop text from the chat to the input bar.
- Improve behavior when editing a user note and pressing the escape key.
- Fix various issues with cheers rendering.

# 0.7.0

### 🚀 New Feature

- Upload images directly from the chat! 📸 Just drag & drop an image in the chat window.
  - Images are uploaded to Imgur.
  - Uploads are anonymous even if connected to Imgur in the same browser.
  - When done, the url is pasted in the chat input ready to be shared.
- Add new notifications settings section:
  - Host threshold to hide hosts & auto-hosts below a specific amount of viewers.
  - Sound on mentions (disabled by default).
  - Sound on whispers (disabled by default).
- Rework header UI to be less of a dumping ground for new features.
- Search now happens as you type instead of requiring to press `Enter`.
- Add support for Youtube channels preview.

### 🐛 Bug Fix

- Focus the chat input when closing the search panel.

# 0.6.0

### 🚀 New Feature

- Add a tool to quickly create a [Straw Poll](https://www.strawpoll.me/) (can be disabled in the settings).
- Search has landed! 🛬 Anything except whispers can be searched from message content or notifications to usernames. The search panel can also be invoked using the `Alt` + `f` shortcut.
- Improve chatter details dialog UI:
  - Rework details to be readable without the need to hover them or their associated icons.
  - Notifications (sub, resub, subgift, host, raid, ritual) are now visible in a the history.
  - A ban reason can now be provided when banning a user from this screen.
  - Badges are now displayed in this dialog.
  - Notes can now be added for each user:
    - Notes are persisted just like settings.
    - Notes can be exported & imported just like settings.
- Add chat markers which can be useful to mark a point in time in chat before going away temporarily, to spot an important discussion, etc.
- Actions can now be reordered.
- Youtube video previews now indicate the video duration.
- Add a button & context menu item to unban previously banned users.
- Add a button to unblock previously blocked users.

### 🐛 Bug Fix

- Fix an issue with display names containing a space displayed as `\s` (turns out spaces are [allowed](https://discuss.dev.twitch.tv/t/irc-s-letter-in-the-end-of-display-name/2208/4) in display names when manually entered by a Twitch staff or for some users who used a Twitch bug).
- Fix a line break issue when copying multiple messages.
- To be more visible, when hosted, a notification is triggered instead of a notice.
- Improve Github previews and add support for issues & pull requests too.
- The home button can now be middle-clicked or `ctrl` / `cmd` clicked to open the homepage in a new tab / window.
- Prevent loss of the current partially typed message if any when invoking the history by saving your current text as a draft which will be restored when needed ([#2](https://github.com/HiDeoo/YaTA/issues/2)).
- Fix an issue with the `/mods` command not displaying its result.
- Fix a context menu issue for moderators only always opening the timeout submenu by default.
- Fix an auto-completion related issue that could lead to the first character being at the end ([#1](https://github.com/HiDeoo/YaTA/issues/1)).
- Add proper error when trying to use `/marker`.

### ⚙️ Internal

- Upgrade to TypeScript 3.0.

# 0.5.0

### 🚀 New Feature

- Add message previews for Twitch clips, Twitch vods, Straw Poll, Youtube videos, Github repos (previews are disabled for bots).
- All user colors should now be readable according to the [WCAG 2.0 guidelines for contrast accessibility](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html) (this take your theme choice into account).
- Add a new setting (disabled by default) to highlight all mentions (`@notYou`) vs only highlighting yourself.
- Add a new setting (disabled by default) to prioritize usernames when auto-completing.

### 🐛 Bug Fix

- Basic emoticons (`:)`, `:/`, etc.) in your own messages are now properly displayed _(this respects your custom emoticons set if you have a Twitch Prime subscription)_.
- Preserve initial casing when rendering a mention.
- Fix an issue when unpausing the auto-scroll which could fail in very fast moving chats.
- Show localized username in context menus when needed.
- Improve emotes rendering.

# 0.4.0

### 🚀 New Feature

- Make the highlight color selection UI more user-friendly.
- Even if they've not talked in chat, new subscriber, re-subscriber, sub gifter, sub giftee, hoster, raider and people performing a ritual can now be auto-completed.
- Add a new setting (disabled by default) to disable dialog animations.
- Improve auto-scrolling behavior when closing a context menu:
  - If auto-scrolling is paused when opening, closing will persist the pause.
  - If auto-scrolling is enabled when opening, closing will scroll to the newest message.

### 🐛 Bug Fix

- Improve selection handling when copying a message using double click.
- Fix an issue with various commands (`/me`, `/w`, `/r`, _etc._) that could be sent as plain text.
- Fix various issues with other people mentions (`@notYou`) highlighting.

### ⚙️ Internal

- Upgrade to Blueprint 3.0.

# 0.3.0

### 🚀 New Feature

- Highlight colors can now be configured per highlight.
- Add profile picture to the chatter dialog.
- Pause auto-scrolling temporarily when opening a context menu.
- If enabled, messages from the user's chat history can be copied on double click.
- If enabled, whispers can be copied on double click.
- Add a new setting (enabled by default) to automatically focus the input field when focusing the application.
- Add new indicators when auto-scrolling is disabled.
- Display the username in a context menu to easily identify the targeted user.
- Add a new setting (disabled by default) to always show the viewer count.

### 🐛 Bug Fix

- Improve chatter dialog UI to avoid flashes when done loading details.
- Fix an UI issue with clips having a very long title.
- Fix an issue with dead keys.
- Prevent isolated @ characters to be identified as mentions.
- Prevent highlighting of your username in URLs.
- Fix an issue prevent mentions & highlights to work when followed by punctuations marks.

# 0.2.1

### 🚀 New Feature

- Clicking the "Auto scrolling disabled" button now scrolls down to the latest message.
- Add a proper warning when trying to whisper yourself.

### 🐛 Bug Fix

- Fix a scrollbar issue when running with zoom enabled.
- Remove duplicated tooltips in the header.
- Fix an issue with long words & URLs not properly wrapping.

# 0.2.0

### 🚀 New Feature

- Add tooltips in the chatter details view.
- Add permissions overview on the login page.
- Add About panel.

### 🐛 Bug Fix

- Fix various scrollbars related issues.
- Improve copy on double click behavior.
- Tweak slightly emote rendering mechanism to fix various issues.
- Improve room state layout when only 1 room mode is enabled.

# 0.1.2

### 🐛 Bug Fix

- Fix an issue preventing messages to display when purging old ones.
- Show proper message when successfully creating a clip.
- Fix an issue when copying messages with emotes.
- Disable content tooltips in history.

# 0.1.1

### 🐛 Bug Fix

- Mark Moobot as a known bot.
- Fix an issue with some BetterTTV emotes.
- Improve error handling for unavailable channels.

### ⚙️ Internal

- Remove service worker cache.

# 0.1.0

### 🎉 Initial release
