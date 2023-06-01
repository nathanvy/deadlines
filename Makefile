include secrets.mk

default:
	mkdir -p staging
	cp ./*.html staging/
	cp ./*.js staging/
	cp ./*.css staging/
	rsync -a --delete staging/ $(URI)

clean:
	rm -rf staging/
