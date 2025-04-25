## logが二つ出力される
ゲームが0ゲーム目から1ゲーム目までになっていたので修正
修正前
```Python
# game_numを設定(is_firstがFalseのとき)
if not self.is_started:
    room.set_game_num(game_num)
    self.is_started = True
else:
    room.add_current_game_index()
```
修正後
```Python
# game_numを設定(is_firstがFalseのとき)
if not self.is_started:
    room.set_game_num(game_num)
    self.is_started = True
room.add_current_game_index()
```

## death_playerの修正
death_player(self, player_name)関数の修正
player_nameが重複する場合にバグるのでplayer_sidに変更