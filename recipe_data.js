// 레시피 데이터: target -> {materials: [...], optional: {...}}
var recipeData = {
    'Kiln_Large': {
        materials: ['Clay_20', 'MasonsTrowel_Option'],
        optional: {
            'MasonsTrowel_Option': ['MasonsTrowel', 'MasonsTrowel_Wood']
        }
    },
    'Blast_Furnace': {
        materials: ['StoneBlock_40', 'Concrete_Option', 'LargeBellows', 'MasonsTrowel_Option'],
        optional: {
            'Concrete_Option': ['BucketConcreteFull', 'BucketCarvedConcreteFull', 'BucketClayCement', 'BucketCarvedClayCement'],
            'MasonsTrowel_Option': ['MasonsTrowel', 'MasonsTrowel_Wood']
        }
    },
    'Advanced_Forge': {
        materials: ['StoneBlock_30', 'Concrete_Option2', 'BlacksmithAnvil', 'BucketLargeWood', 'Log', 'LargeBellows', 'MasonsTrowel_Option'],
        optional: {
            'Concrete_Option2': ['BucketConcreteFull', 'BucketCarvedConcreteFull', 'BucketClayCement', 'BucketCarvedClayCement'],
            'MasonsTrowel_Option': ['MasonsTrowel', 'MasonsTrowel_Wood']
        }
    },
    'StoneBlock_40': {
        materials: ['Stone', 'Hammer_Type', 'Chisel_Option'],
        optional: {
            'Chisel_Option': ['StoneChisel', 'MasonsChisel']
        }
    },
    'StoneBlock_30': {
        materials: ['Stone', 'Hammer_Type', 'Chisel_Option'],
        optional: {
            'Chisel_Option': ['StoneChisel', 'MasonsChisel']
        }
    },
    'BucketConcreteFull': {
        materials: ['ConcretePowder', 'Water_10L', 'Bucket_Option'],
        optional: {
            'Bucket_Option': ['Bucket', 'BucketEmpty', 'BucketCarved', 'BucketLargeWood']
        }
    },
    'BucketCarvedConcreteFull': {
        materials: ['ConcretePowder', 'Water_10L', 'Bucket_Option'],
        optional: {
            'Bucket_Option': ['Bucket', 'BucketEmpty', 'BucketCarved', 'BucketLargeWood']
        }
    },
    'BucketClayCement': {
        materials: ['Clay_2', 'Bucket_Option', 'Sandbag_Option', 'Water_10L'],
        optional: {
            'Bucket_Option': ['Bucket', 'BucketEmpty', 'BucketCarved', 'BucketLargeWood'],
            'Sandbag_Option': ['Sandbag', 'GrassTuft_50']
        }
    },
    'BucketCarvedClayCement': {
        materials: ['Clay_2', 'Bucket_Option', 'Sandbag_Option', 'Water_10L'],
        optional: {
            'Bucket_Option': ['Bucket', 'BucketEmpty', 'BucketCarved', 'BucketLargeWood'],
            'Sandbag_Option': ['Sandbag', 'GrassTuft_50']
        }
    },
    'BucketLargeWood': {
        materials: ['Plank_4', 'Hammer', 'Saw', 'Nails_4', 'Wire', 'SmallHandle', 'IronBandSmall_2']
    },
    'LargeBellows': {
        materials: ['Hammer', 'Saw', 'Plank_2', 'Nails_2', 'Handle_2', 'LeatherCrudeTannedMedium']
    },
    'MasonsTrowel_Wood': {
        materials: ['SharpKnife', 'TreeBranch2']
    },
    'BlacksmithAnvil': {
        materials: ['ClayBlacksmithAnvilMold', 'Tongs', 'Charcoal_10', 'CeramicCrucible_Iron_32', 'Blast_Furnace'],
    },
    'ClayBlacksmithAnvilMold': {
        materials: ['ClayBlacksmithAnvilMoldUnfired', 'StartFire', 'Log_Fuel_Option', 'Kiln_Large'],
        optional: {
            'Log_Fuel_Option': ['Log', 'Charcoal']
        }
    },
    'ClayBlacksmithAnvilMoldUnfired': {
        materials: ['Clay_8', 'WoodenBlacksmithAnvilMold']
    },
    'WoodenBlacksmithAnvilMold': {
        materials: ['Hammer', 'Saw', 'Plank_4', 'Nails_1']
    },
    'Charcoal': {
        materials: ['Log', 'CharcoalPit']
    },
    'CeramicCrucible_Iron_32': {
        materials: ['CeramicCrucible_Iron_Option'],
        optional: {
            'CeramicCrucible_Iron_Option': ['CeramicCrucible_Iron', 'CeramicCrucibleSmall_Iron']
        }
    },
    'CeramicCrucible': {
        materials: ['CeramicCrucibleUnfired', 'StartFire', 'Log_Fuel_Option', 'KilnSmall'],
        optional: {
            'Log_Fuel_Option': ['Log', 'Charcoal']
        }
    },
    'CeramicCrucibleSmall': {
        materials: ['CeramicCrucibleSmallUnfired', 'StartFire', 'Log_Fuel_Option', 'KilnSmall'],
        optional: {
            'Log_Fuel_Option': ['Log', 'Charcoal']
        }
    },
    'CeramicCrucibleUnfired': {
        materials: ['Clay_2', 'Sandbag', 'PotteryWheel']
    },
    'CeramicCrucibleSmallUnfired': {
        materials: ['Clay', 'Sandbag', 'PotteryWheel']
    },
    'Charcoal_10': {
        materials: ['Charcoal']
    },
    'CeramicCrucible_Iron_32': {
        materials: ['CeramicCrucible_Iron_Option'],
        optional: {
            'CeramicCrucible_Iron_Option': ['CeramicCrucible_Iron', 'CeramicCrucibleSmall_Iron']
        }
    },
    'CeramicCrucible_Iron': {
        materials: ['CeramicCrucible', 'Iron_32']
    },
    'CeramicCrucibleSmall_Iron': {
        materials: ['CeramicCrucibleSmall', 'Iron_32']
    },
    'Iron_32': {
        materials: ['Iron']
    },
    'Clay_8': {
        materials: ['Clay']
    },
    'GrassTuft_50': {
        materials: ['GrassTuft_Option'],
        optional: {
            'GrassTuft_Option': ['GrassTuft', 'HayTuft']
        }
    },
    'GrassTuft_Option': {
        materials: ['GrassTuft', 'HayTuft']
    }
};

// 노드 정보: id -> {label, type}
var nodeInfo = {
    'Kiln_Large': { label: '고급 가마', type: 'final' },
    'Blast_Furnace': { label: '고급 용광로', type: 'final' },
    'Advanced_Forge': { label: '고급 대장간', type: 'final' },
    'Clay_20': { label: '점토 20개', type: 'raw' },
    'MasonsTrowel_Option': { label: '석공 흙손\n옵션', type: 'optional' },
    'MasonsTrowel': { label: '석공 흙손', type: 'loot' },
    'MasonsTrowel_Wood': { label: '석공 흙손\n- 나무', type: 'tool' },
    'SharpKnife': { label: '칼 계열', type: 'loot' },
    'TreeBranch2': { label: '나뭇가지', type: 'raw' },
    'StoneBlock_40': { label: '돌 블록\n40개', type: 'item' },
    'StoneBlock_30': { label: '돌 블록\n30개', type: 'item' },
    'Concrete_Option': { label: '콘크리트\n옵션', type: 'optional' },
    'Concrete_Option2': { label: '콘크리트\n옵션 (고급 대장간)', type: 'optional' },
    'BucketConcreteFull': { label: '양동이\n- 콘크리트', type: 'item' },
    'BucketCarvedConcreteFull': { label: '조각된 양동이\n- 콘크리트', type: 'item' },
    'BucketClayCement': { label: '양동이\n- 점토 시멘트', type: 'item' },
    'BucketCarvedClayCement': { label: '조각된 양동이\n- 점토 시멘트', type: 'item' },
    'Bucket_Option': { label: '양동이\n옵션', type: 'optional' },
    'Bucket': { label: '양동이', type: 'loot' },
    'BucketEmpty': { label: '빈 양동이', type: 'loot' },
    'BucketCarved': { label: '조각된 양동이', type: 'loot' },
    'BucketLargeWood': { label: '나무 양동이', type: 'item' },
    'LargeBellows': { label: '대형 풀무', type: 'item' },
    'Hammer_Type': { label: '망치 계열', type: 'loot' },
    'Chisel_Option': { label: '돌 끌\n옵션', type: 'optional' },
    'Stone': { label: '돌', type: 'raw' },
    'StoneChisel': { label: '돌 끌', type: 'loot' },
    'MasonsChisel': { label: '석공 끌', type: 'loot' },
    'Plank_4': { label: '판자 4개', type: 'item' },
    'Plank_2': { label: '판자 2개', type: 'item' },
    'Nails_4': { label: '못 4개', type: 'item' },
    'Nails_2': { label: '못 2개', type: 'item' },
    'Nails_1': { label: '못 1개', type: 'item' },
    'Hammer': { label: '망치', type: 'loot' },
    'Saw': { label: '톱', type: 'loot' },
    'Wire': { label: '철사', type: 'item' },
    'SmallHandle': { label: '작은 손잡이', type: 'item' },
    'IronBandSmall_2': { label: '작은 철띠 2개', type: 'item' },
    'Handle_2': { label: '손잡이 2개', type: 'item' },
    'LeatherCrudeTannedMedium': { label: '무두질한\n중형 가죽 1개', type: 'item' },
    'Sandbag': { label: '모래주머니', type: 'item' },
    'Sandbag_Option': { label: '모래주머니\n옵션', type: 'optional' },
    'GrassTuft_50': { label: '건초 50개', type: 'raw' },
    'GrassTuft_Option': { label: '건초 옵션', type: 'optional' },
    'GrassTuft': { label: '풀 뭉치', type: 'raw' },
    'HayTuft': { label: '건초 뭉치', type: 'raw' },
    'ConcretePowder': { label: '콘크리트 가루', type: 'item' },
    'Water_10L': { label: '물 10L', type: 'raw' },
    'Clay_2': { label: '점토 2개', type: 'raw' },
    'Clay': { label: '점토', type: 'raw' },
    'WoodenBlacksmithAnvilMold': { label: '나무 대장간\n모루 거푸집', type: 'item' },
    'BlacksmithAnvil': { label: '대장간 모루', type: 'item' },
    'ClayBlacksmithAnvilMold': { label: '세라믹 대장간\n모루 거푸집', type: 'item' },
    'ClayBlacksmithAnvilMoldUnfired': { label: '굽지 않은 점토\n대장간 모루 거푸집', type: 'item' },
    'Tongs': { label: '금속 집게', type: 'loot' },
    'Charcoal': { label: '목탄', type: 'raw' },
    'Coal': { label: '석탄', type: 'raw' },
    'Coke': { label: '숯', type: 'raw' },
    'Log': { label: '통나무', type: 'raw' },
    'Charcoal_10': { label: '목탄 10개', type: 'raw' },
    'CeramicCrucible_Iron_32': { label: '세라믹 도가니\n- 철 32개', type: 'item' },
    'CeramicCrucible_Iron_Option': { label: '세라믹 도가니\n옵션', type: 'optional' },
    'CeramicCrucible_Iron': { label: '세라믹 도가니\n- 철', type: 'item' },
    'CeramicCrucibleSmall_Iron': { label: '작은 세라믹 도가니\n- 철', type: 'item' },
    'Iron_32': { label: '철 32개', type: 'raw' },
    'Clay_8': { label: '점토 8개', type: 'raw' },
    'Log_Fuel_Option': { label: '연료 옵션', type: 'optional' },
    'Log_Fuel': { label: '통나무/목탄', type: 'raw' },
    'CharcoalPit': { label: '숯 가마', type: 'station' },
    'CeramicCrucible_Iron_32': { label: '세라믹 도가니\n- 철 32개', type: 'item' },
    'CeramicCrucible': { label: '세라믹 도가니', type: 'item' },
    'CeramicCrucibleSmall': { label: '작은 세라믹 도가니', type: 'item' },
    'CeramicCrucibleUnfired': { label: '굽지 않은\n세라믹 도가니', type: 'item' },
    'CeramicCrucibleSmallUnfired': { label: '굽지 않은\n작은 세라믹 도가니', type: 'item' },
    'PotteryWheel': { label: '도예 물레', type: 'station' },
    'KilnSmall': { label: '원시 가마', type: 'station' },
    'StartFire': { label: '라이터 등', type: 'loot' }
};

