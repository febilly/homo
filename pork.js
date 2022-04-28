const pork = ((Nums) => {
	const numsReversed = Object.keys(Nums).map(x => +x).filter(x => x > 0)
	const getMinDiv = (num) => {
		for (let i = numsReversed.length; i >= 0; i--)
			if (num >= numsReversed[i])
				return numsReversed[i]
	}
	const isDotRegex = /\.(\d+?)0{0,}$/
	const demolish = (num) => {
		if (typeof num !== "number")
			return ""

		if (num === Infinity || Number.isNaN(num))
			return `这么美味的${num}有必要论证吗`

		if (num < 0)
			return `(⑨)*(${demolish(num * -1)})`.replace(/\*\(1\)/g, "")

		if (!Number.isInteger(num)) {
			// abs(num) is definitely smaller than 2**51
			// rescale
			const n = num.toFixed(16).match(isDotRegex)[1].length
			return `(${demolish(num * Math.pow(10, n))})/(10)^(${n})`
		}

		if (Nums[num])
			return String(num)

		const div = getMinDiv(num)
		return (`${div}*(${demolish(Math.floor(num / div))})+` +
			`(${demolish(num % div)})`).replace(/\*\(1\)|\+\(0\)$/g, "")
	}
	return (num) => demolish(num).replace(/\d+|⑨/g, (n) => Nums[n]).replace("^", "**")
})({
	65472: "65472",
	47088: "654*72",
	32832: "6*5472",
	30680: "65*472",
	23328: "6*54*72",
	18720: "65*4*72",
	14160: "6*5*472",
	13094: "6547*2",
	9156: "654*7*2",
	8640: "6*5*4*72",
	6564: "6*547*2",
	6549: "6547+2",
	6545: "6547-2",
	6110: "65*47*2",
	5478: "6+5472",
	4580: "654*7+2",
	4576: "654*7-2",
	4536: "6*54*7*2",
	3894: "6+54*72",
	3640: "65*4*7*2",
	3284: "6*547+2",
	3280: "6*547-2",
	3057: "65*47+2",
	3053: "65*47-2",
	2820: "6*5*47*2",
	2366: "6+5*472",
	2289: "654*7/2",
	2270: "6*54*7+2",
	2266: "6*54*7-2",
	1822: "65*4*7+2",
	1818: "65*4*7-2",
	1680: "6*5*4*7*2",
	1641: "6*547/2",
	1446: "6+5*4*72",
	1412: "6*5*47+2",
	1408: "6*5*47-2",
	1170: "65/4*72",
	1134: "6*54*7/2",
	1100: "6+547*2",
	910: "65*4*7/2",
	842: "6*5*4*7+2",
	838: "6*5*4*7-2",
	762: "6+54*7*2",
	726: "654+72",
	705: "6*5*47/2",
	668: "654+7*2",
	663: "654+7+2",
	659: "654+7-2",
	649: "654-7+2",
	645: "654-7-2",
	640: "654-7*2",
	582: "654-72",
	555: "6+547+2",
	551: "6+547-2",
	540: "6*5/4*72",
	537: "65+472",
	502: "6*5+472",
	483: "6+5+472",
	476: "6+5*47*2",
	473: "6-5+472",
	420: "6*5*4*7/2",
	396: "6*54+72",
	386: "6+54*7+2",
	382: "6+54*7-2",
	353: "65+4*72",
	338: "6*54+7*2",
	333: "6*54+7+2",
	332: "65*4+72",
	329: "6*54+7-2",
	319: "6*54-7+2",
	318: "6*5+4*72",
	315: "6*54-7-2",
	310: "6*54-7*2",
	299: "6+5+4*72",
	289: "6-5+4*72",
	286: "6+5*4*7*2",
	274: "65*4+7*2",
	269: "65*4+7+2",
	265: "65*4+7-2",
	255: "65*4-7+2",
	252: "6*54-72",
	251: "65*4-7-2",
	246: "65*4-7*2",
	243: "6+5*47+2",
	239: "6+5*47-2",
	195: "6+54*7/2",
	192: "6*5*4+72",
	188: "65*4-72",
	159: "65+47*2",
	148: "6+5*4*7+2",
	144: "6+5*4*7-2",
	141: "65+4+72",
	134: "6*5*4+7*2",
	133: "65-4+72",
	132: "6+54+72",
	129: "6*5*4+7+2",
	125: "6*5*4+7-2",
	124: "6*5+47*2",
	121: "65+4*7*2",
	115: "6*5*4-7+2",
	114: "65+47+2",
	111: "6*5*4-7-2",
	110: "65+47-2",
	106: "6*5+4+72",
	105: "6+5+47*2",
	98: "6+5*4+72",
	96: "6+5/4*72",
	95: "65+4*7+2",
	91: "65+4*7-2",
	87: "6+5+4+72",
	86: "6*5+4*7*2",
	83: "65+4+7*2",
	79: "65+4*7/2",
	78: "65+4+7+2",
	77: "6-5+4+72",
	76: "6+5*4*7/2",
	75: "65-4+7*2",
	74: "65+4+7-2",
	70: "65-4+7+2",
	69: "6+54+7+2",
	67: "6+5+4*7*2",
	66: "65-4+7-2",
	65: "6+54+7-2",
	64: "65+4-7+2",
	60: "65+4-7-2",
	58: "6-5*4+72",
	57: "6-5+4*7*2",
	56: "65-4-7+2",
	55: "65+4-7*2",
	52: "65-4-7-2",
	51: "65-4*7/2",
	50: "6-5+47+2",
	48: "6*5+4+7*2",
	47: "65-4-7*2",
	46: "6+54-7*2",
	44: "6*5+4*7/2",
	43: "6*5+4+7+2",
	41: "6+5+4*7+2",
	40: "6+5*4+7*2",
	39: "65-4*7+2",
	37: "6+5+4*7-2",
	35: "65-4*7-2",
	31: "6+5*4+7-2",
	29: "6+5+4+7*2",
	27: "6-5+4*7-2",
	25: "6+5+4*7/2",
	24: "6+5+4+7+2",
	21: "6+5-4+7*2",
	20: "65-47+2",
	19: "6-5+4+7*2",
	17: "6+5*4-7-2",
	16: "65-47-2",
	15: "6-5+4*7/2",
	14: "6-5+4+7+2",
	12: "6+5-4+7-2",
	11: "6-5-4+7*2",
	10: "6+5+4-7+2",
	9: "65-4*7*2",
	6: "6+5+4-7-2",
	5: "6+5+4-7-2-(6+5+4-7*2)",
	4: "6*5-4*7+2",
	3: "6*5-4*7+2-(6+5+4-7*2)",
	2: "6+5-4-7+2",
	1: "6+5+4-7*2",
	0: "6*5-4*7-2",
	"⑨": "65-4*7*2",
})

if (typeof module === 'object' && module.exports)
	module.exports = pork
