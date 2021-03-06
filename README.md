npm日本語トークナイザ 単語分割機能調査 2018
====

# これはなに？
エスペラント語辞書アプリ[lina\_dicto]( https://github.com/MichinariNukazawa/lina_dicto )をアップデートするにあたり、ユーザが入力した日本語の文章をアプリ側で単語分割して検索にかけたい。  
この日本語文章検索機能の強化を実現するために、npmから日本語の形態素解析パッケージを選定したい。  

# 使い方
`make test`  

# 単語分割機能の要件
- パッケージ導入だけで使える。辞書データはプリインストール希望、別途フリーなものを導入まで許容。  
- スタンドアロン(オフラインで使える)  
- 文章を良い感じに分割できること。これは実際にサンプル文章を用意して分割させ、目視確認・主観判定するものとする。  
(と書いたものの、エスペラント単語と同じく、とりあえず細かく分割してから長めの結合を作って辞書検索しながら短くしていく、で良いのではと考えている。)  

**いらない,あるとよい等**
- エスペラント語はアプリ独自のsplitterで分割するので対応の必要はない。  
- 日エス辞書アプリであるため日本語以外の対応は必要ないが、将来性を鑑みCJK対応しているならそれに越したことはない。  
- 簡易でよいので基本形への変換があると将来的に検索機能のマッチ率を高められるため好ましい。  
- 速度はユーザへの応答がもたつかなければ良い (2018現在のlina\_dictoは体感で即時に検索結果を返すのでこれを維持する)  
- 辞書の読み込み時間は遅く無ければ待っても良い (2018現在のlina\_dictoは起動時に検索用辞書を生成しているためHDD環境で起動が遅い)  
- 辞書サイズは100MBを超えたりしなければOK (2018現在のlina\_dictoがosxで140MB程度)  

kuromojiが使っていたから"すもももももももものうち"をサンプル文字列に入れてみたけれど、別にこれが分割できる必要はないかなと考えている。  


# 簡易評価
結論として、kuromoji,tiny-segmenterの2パッケージが候補として残った。  
候補外から紹介していく。  

## cjk-tokenizer:
MIT  

コマンドラインのみで公式APIなし。別途サーバが必要な模様。ぱっとやってサンプルコードが動かない。望む動作を得られなさそう。  
候補外とする。  

## tokenizer-ja
パッケージ消えてる？  
候補外とする。  

## react-native-japanese-tokenizer
react native使ってない。  
候補外とする。  

## morpheme-match
> 形態素解析したトークンを元に  
その形態素解析をしたい。  
候補外とする。  

## kuromoji
https://www.npmjs.com/package/kuromoji  
https://zeny.io/blog/2016/06/16/kuromoji-js/  
Apache-2.0  

基本形への変換あり。  
要コールバック記法。  

## tiny-segmenter
https://www.npmjs.com/package/tiny-segmenter  
MIT  

基本形への変換なし。  
同期関数。コールバック記法不要。  

