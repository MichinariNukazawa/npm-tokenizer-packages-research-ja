
.PHONY: all run
all: run

run: test

.PHONY: cjk-tokenizer kuromoji tiny-segmenter

cjk-tokenizer:
	du -sh node_modules/cjk-tokenizer/
	node node_modules/cjk-tokenizer/bin/cjk-tokenizer.js sample.txt

.PHONY: test
test:
	du -sh node_modules/cjk-tokenizer/
	du -sh node_modules/kuromoji/
	du -sh node_modules/tiny-segmenter/
	npm run test

.PHONY: report
report:
	mkdir -p report/
	make test > report/report-$(shell date +%Y%m%d-%H%M).txt 2>&1

