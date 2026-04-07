f = () => a.fft[0]

shape(f, f, f)
	.pixelate([1, 21].smooth())
	.scale(0.01, 0.1)
	.diff(src(o0)
		.scale(0.9))
	.out(o0)

src(o0)
	.blend(shape(3).pixelate(f/50,f/50))
	.out(o1)
render(o1)
