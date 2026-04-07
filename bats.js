a = []

for (i = 0; i < 100; i++) {
	a.push(i)
}

f = () => a.fft[0]

noise(f, f, f)
	.pixelate(a.smooth(), () => time)
	.scale(0.01, 0.1)
	.diff(src(o0)
		.scale(0.9))
	.out(o0)

src(o0)
	.blend(shape(3)
		.pixelate(f / 50, f / 50))
	.out(o1)
render(o1)

src(o1)
	.rotate()
	.scale(a, a)
	.add(osc(1, 0, 100))
	.invert()
	.out(o2)

render(o2)
