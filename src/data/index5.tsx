export interface Row {
  packageName: string;
  snykHealthScore: number;
  totalContributors: number;
  daysSinceLastRelease: number;
  totalGithubForks: number;
  packageMaintenance: "Unfunded" | "_" | "Funded";
  dependentModels: (
    | "selimsef"
    | "wm"
    | "ntech"
    | "eighteen"
    | "medics"
    | "boken"
  )[];
}

export const data: Row[] = [
  {
    packageName: "numpy",
    snykHealthScore: 94,
    packageMaintenance: "Funded",
    dependentModels: ["selimsef", "wm", "ntech", "eighteen", "medics", "boken"],
    totalContributors: 450,
    daysSinceLastRelease: 10,
    totalGithubForks: 5820
  },
  {
    packageName: "torchvision",
    snykHealthScore: 97,
    packageMaintenance: "Unfunded",
    dependentModels: ["selimsef", "wm", "ntech", "eighteen", "medics", "boken"],
    totalContributors: 400,
    daysSinceLastRelease: 60,
    totalGithubForks: 5010
  },
  {
    packageName: "albumentations",
    snykHealthScore: 88,
    packageMaintenance: "Unfunded",
    dependentModels: ["selimsef", "ntech", "eighteen", "medics", "boken"],
    totalContributors: 90,
    daysSinceLastRelease: 30,
    totalGithubForks: 1110
  },
  {
    packageName: "boto3",
    snykHealthScore: 97,
    packageMaintenance: "Unfunded",
    dependentModels: ["selimsef", "wm", "ntech", "medics", "boken"],
    totalContributors: 110,
    daysSinceLastRelease: 1,
    totalGithubForks: 1430
  },
  {
    packageName: "opencv_python",
    snykHealthScore: 94,
    packageMaintenance: "Unfunded",
    dependentModels: ["selimsef", "ntech", "eighteen", "medics", "boken"],
    totalContributors: 30,
    daysSinceLastRelease: 60,
    totalGithubForks: 416
  },
  {
    packageName: "opencv-python",
    snykHealthScore: 96,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 30,
    daysSinceLastRelease: 60,
    totalGithubForks: 416
  },
  {
    packageName: "pandas",
    snykHealthScore: 96,
    packageMaintenance: "Funded",
    dependentModels: ["selimsef", "wm", "eighteen", "medics", "boken"],
    totalContributors: 420,
    daysSinceLastRelease: 10,
    totalGithubForks: 12960
  },
  {
    packageName: "torch",
    snykHealthScore: 94,
    packageMaintenance: "Unfunded",
    dependentModels: ["selimsef", "wm", "ntech", "eighteen", "boken"],
    totalContributors: 340,
    daysSinceLastRelease: 60,
    totalGithubForks: 13670
  },
  {
    packageName: "flask",
    snykHealthScore: 100,
    packageMaintenance: "Funded",
    dependentModels: ["selimsef", "wm", "ntech", "boken"],
    totalContributors: 410,
    daysSinceLastRelease: 90,
    totalGithubForks: 0
  },
  {
    packageName: "pillow",
    snykHealthScore: 97,
    packageMaintenance: "Funded",
    dependentModels: ["selimsef", "wm", "eighteen", "boken"],
    totalContributors: 320,
    daysSinceLastRelease: 60,
    totalGithubForks: 1710
  },
  {
    packageName: "facenet_pytorch",
    snykHealthScore: 68,
    packageMaintenance: "Funded",
    dependentModels: ["selimsef", "medics", "boken"],
    totalContributors: 20,
    daysSinceLastRelease: 180,
    totalGithubForks: 500
  },
  {
    packageName: "efficientnet_pytorch",
    snykHealthScore: 77,
    packageMaintenance: "Unfunded",
    dependentModels: ["ntech", "boken"],
    totalContributors: 30,
    daysSinceLastRelease: 120,
    totalGithubForks: 1260
  },
  {
    packageName: "pretrainedmodels",
    snykHealthScore: 61,
    packageMaintenance: "Unfunded",
    dependentModels: ["medics", "boken"],
    totalContributors: 20,
    daysSinceLastRelease: 795,
    totalGithubForks: 1730
  },
  {
    packageName: "scipy",
    snykHealthScore: 94,
    packageMaintenance: "Funded",
    dependentModels: ["medics"],
    totalContributors: 430,
    daysSinceLastRelease: 24,
    totalGithubForks: 3840
  },
  {
    packageName: "appdirs",
    snykHealthScore: 79,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 30,
    daysSinceLastRelease: 365,
    totalGithubForks: 81
  },
  {
    packageName: "attrs",
    snykHealthScore: 97,
    packageMaintenance: "Funded",
    dependentModels: ["wm"],
    totalContributors: 110,
    daysSinceLastRelease: 120,
    totalGithubForks: 264
  },
  {
    packageName: "autopep8",
    snykHealthScore: 88,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 40,
    daysSinceLastRelease: 120,
    totalGithubForks: 249
  },
  {
    packageName: "backcall",
    snykHealthScore: 68,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 2,
    daysSinceLastRelease: 365,
    totalGithubForks: 3
  },
  {
    packageName: "bleach",
    snykHealthScore: 97,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 70,
    daysSinceLastRelease: 22,
    totalGithubForks: 222
  },
  {
    packageName: "certifi",
    snykHealthScore: 88,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 30,
    daysSinceLastRelease: 90,
    totalGithubForks: 155
  },
  {
    packageName: "chardet",
    snykHealthScore: 88,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 40,
    daysSinceLastRelease: 270,
    totalGithubForks: 210
  },
  {
    packageName: "cycler",
    snykHealthScore: 78,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 20,
    daysSinceLastRelease: 2190,
    totalGithubForks: 40
  },
  {
    packageName: "cython",
    snykHealthScore: 96,
    packageMaintenance: "Funded",
    dependentModels: ["medics"],
    totalContributors: 370,
    daysSinceLastRelease: 30,
    totalGithubForks: 1180
  },
  {
    packageName: "decorator",
    snykHealthScore: 88,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 20,
    daysSinceLastRelease: 90,
    totalGithubForks: 85
  },
  {
    packageName: "decord",
    snykHealthScore: 76,
    packageMaintenance: "Unfunded",
    dependentModels: ["medics"],
    totalContributors: 10,
    daysSinceLastRelease: 60,
    totalGithubForks: 55
  },
  {
    packageName: "defusedxml",
    snykHealthScore: 80,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 5,
    daysSinceLastRelease: 180,
    totalGithubForks: 31
  },
  {
    packageName: "distlib",
    snykHealthScore: 72,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 0,
    daysSinceLastRelease: 0,
    totalGithubForks: 0
  },
  {
    packageName: "docopt",
    snykHealthScore: 79,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 30,
    daysSinceLastRelease: 2555,
    totalGithubForks: 554
  },
  {
    packageName: "easydict",
    snykHealthScore: 56,
    packageMaintenance: "Unfunded",
    dependentModels: ["eighteen"],
    totalContributors: 7,
    daysSinceLastRelease: 1095,
    totalGithubForks: 35
  },
  {
    packageName: "einops",
    snykHealthScore: 72,
    packageMaintenance: "Unfunded",
    dependentModels: ["medics"],
    totalContributors: 20,
    daysSinceLastRelease: 365,
    totalGithubForks: 129
  },
  {
    packageName: "elpy",
    snykHealthScore: 60,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 70,
    daysSinceLastRelease: 730,
    totalGithubForks: 228
  },
  {
    packageName: "entrypoints",
    snykHealthScore: 73,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 8,
    daysSinceLastRelease: 1095,
    totalGithubForks: 19
  },
  {
    packageName: "faiss",
    snykHealthScore: 64,
    packageMaintenance: "Unfunded",
    dependentModels: ["medics"],
    totalContributors: 80,
    daysSinceLastRelease: 720,
    totalGithubForks: 2320
  },
  {
    packageName: "filelock",
    snykHealthScore: 73,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 10,
    daysSinceLastRelease: 720,
    totalGithubForks: 52
  },
  {
    packageName: "flake8",
    snykHealthScore: 94,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 80,
    daysSinceLastRelease: 120,
    totalGithubForks: 267
  },
  {
    packageName: "idna",
    snykHealthScore: 85,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 20,
    daysSinceLastRelease: 90,
    totalGithubForks: 69
  },
  {
    packageName: "imageio",
    snykHealthScore: 81,
    packageMaintenance: "Funded",
    dependentModels: ["wm"],
    totalContributors: 70,
    daysSinceLastRelease: 365,
    totalGithubForks: 182
  },
  {
    packageName: "importlib-metadata",
    snykHealthScore: 88,
    packageMaintenance: "Funded",
    dependentModels: ["wm"],
    totalContributors: 40,
    daysSinceLastRelease: 12,
    totalGithubForks: 21
  },
  {
    packageName: "jedi",
    snykHealthScore: 91,
    packageMaintenance: "Funded",
    dependentModels: ["wm"],
    totalContributors: 130,
    daysSinceLastRelease: 240,
    totalGithubForks: 450
  },
  {
    packageName: "jinja2",
    snykHealthScore: 100,
    packageMaintenance: "Funded",
    dependentModels: ["wm"],
    totalContributors: 260,
    daysSinceLastRelease: 90,
    totalGithubForks: 1420
  },
  {
    packageName: "jsonschema",
    snykHealthScore: 81,
    packageMaintenance: "Funded",
    dependentModels: ["wm"],
    totalContributors: 80,
    daysSinceLastRelease: 720,
    totalGithubForks: 476
  },
  {
    packageName: "lmdb",
    snykHealthScore: 77,
    packageMaintenance: "Unfunded",
    dependentModels: ["medics"],
    totalContributors: 30,
    daysSinceLastRelease: 120,
    totalGithubForks: 79
  },
  {
    packageName: "matplotlib",
    snykHealthScore: 77,
    packageMaintenance: "Unfunded",
    dependentModels: ["ntech"],
    totalContributors: 30,
    daysSinceLastRelease: 120,
    totalGithubForks: 79
  },
  {
    packageName: "mccabe",
    snykHealthScore: 80,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 20,
    daysSinceLastRelease: 1825,
    totalGithubForks: 40
  },
  {
    packageName: "mistune",
    snykHealthScore: 80,
    packageMaintenance: "Funded",
    dependentModels: ["wm"],
    totalContributors: 30,
    daysSinceLastRelease: 1095,
    totalGithubForks: 199
  },
  {
    packageName: "mmcv",
    snykHealthScore: 87,
    packageMaintenance: "Unfunded",
    dependentModels: ["medics"],
    totalContributors: 130,
    daysSinceLastRelease: 1,
    totalGithubForks: 779
  },
  {
    packageName: "mmdet",
    snykHealthScore: 90,
    packageMaintenance: "Unfunded",
    dependentModels: ["medics"],
    totalContributors: 240,
    daysSinceLastRelease: 14,
    totalGithubForks: 5690
  },
  {
    packageName: "nbconvert",
    snykHealthScore: 97,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 210,
    daysSinceLastRelease: 60,
    totalGithubForks: 439
  },
  {
    packageName: "nbformat",
    snykHealthScore: 99,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 230,
    daysSinceLastRelease: 150,
    totalGithubForks: 1610
  },
  {
    packageName: "networkx",
    snykHealthScore: 96,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 430,
    daysSinceLastRelease: 30,
    totalGithubForks: 2380
  },
  {
    packageName: "notebook",
    snykHealthScore: 100,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 14,
    daysSinceLastRelease: 0,
    totalGithubForks: 1610
  },
  {
    packageName: "olefile",
    snykHealthScore: 61,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 20,
    daysSinceLastRelease: 1095,
    totalGithubForks: 62
  },
  {
    packageName: "pandocfilters",
    snykHealthScore: 85,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 40,
    daysSinceLastRelease: 300,
    totalGithubForks: 104
  },
  {
    packageName: "parso",
    snykHealthScore: 86,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 50,
    daysSinceLastRelease: 150,
    totalGithubForks: 74
  },
  {
    packageName: "pexpect",
    snykHealthScore: 83,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 80,
    daysSinceLastRelease: 730,
    totalGithubForks: 430
  },
  {
    packageName: "pickleshare",
    snykHealthScore: 79,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 20,
    daysSinceLastRelease: 1095,
    totalGithubForks: 14
  },
  {
    packageName: "pipreqs",
    snykHealthScore: 65,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 50,
    daysSinceLastRelease: 730,
    totalGithubForks: 234
  },
  {
    packageName: "prometheus-client",
    snykHealthScore: 100,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 110,
    daysSinceLastRelease: 90,
    totalGithubForks: 575
  },
  {
    packageName: "prompt-toolkit",
    snykHealthScore: 88,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 180,
    daysSinceLastRelease: 5,
    totalGithubForks: 569
  },
  {
    packageName: "ptyprocess",
    snykHealthScore: 84,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 20,
    daysSinceLastRelease: 240,
    totalGithubForks: 61
  },
  {
    packageName: "pycodestyle",
    snykHealthScore: 95,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 110,
    daysSinceLastRelease: 150,
    totalGithubForks: 609
  },
  {
    packageName: "pydocs",
    snykHealthScore: 42,
    packageMaintenance: "Unfunded",
    dependentModels: ["eighteen"],
    totalContributors: 1,
    daysSinceLastRelease: 0,
    totalGithubForks: 2
  },
  {
    packageName: "pyflakes",
    snykHealthScore: 90,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 70,
    daysSinceLastRelease: 150,
    totalGithubForks: 156
  },
  {
    packageName: "pygments",
    snykHealthScore: 94,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 390,
    daysSinceLastRelease: 10,
    totalGithubForks: 320
  },
  {
    packageName: "pyparsing",
    snykHealthScore: 87,
    packageMaintenance: "Funded",
    dependentModels: ["wm"],
    totalContributors: 40,
    daysSinceLastRelease: 365,
    totalGithubForks: 179
  },
  {
    packageName: "pyrsistent",
    snykHealthScore: 88,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 50,
    daysSinceLastRelease: 60,
    totalGithubForks: 117
  },
  {
    packageName: "python-dateutil",
    snykHealthScore: 94,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 110,
    daysSinceLastRelease: 30,
    totalGithubForks: 380
  },
  {
    packageName: "pytz",
    snykHealthScore: 80,
    packageMaintenance: "Funded",
    dependentModels: ["wm"],
    totalContributors: 20,
    daysSinceLastRelease: 210,
    totalGithubForks: 57
  },
  {
    packageName: "pywavelets",
    snykHealthScore: 87,
    packageMaintenance: "Funded",
    dependentModels: ["wm"],
    totalContributors: 40,
    daysSinceLastRelease: 730,
    totalGithubForks: 346
  },
  {
    packageName: "pyyaml",
    snykHealthScore: 85,
    packageMaintenance: "Unfunded",
    dependentModels: ["eighteen"],
    totalContributors: 40,
    daysSinceLastRelease: 210,
    totalGithubForks: 339
  },
  {
    packageName: "pyzmq",
    snykHealthScore: 97,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 150,
    daysSinceLastRelease: 21,
    totalGithubForks: 572
  },
  {
    packageName: "requests",
    snykHealthScore: 97,
    packageMaintenance: "Funded",
    dependentModels: ["wm"],
    totalContributors: 410,
    daysSinceLastRelease: 30,
    totalGithubForks: 8410
  },
  {
    packageName: "scikit_image",
    snykHealthScore: 91,
    packageMaintenance: "Funded",
    dependentModels: ["medics"],
    totalContributors: 360,
    daysSinceLastRelease: 1,
    totalGithubForks: 1860
  },
  {
    packageName: "scikit-image",
    snykHealthScore: 94,
    packageMaintenance: "Funded",
    dependentModels: ["wm"],
    totalContributors: 360,
    daysSinceLastRelease: 1,
    totalGithubForks: 1860
  },
  {
    packageName: "scikit_learn",
    snykHealthScore: 94,
    packageMaintenance: "Funded",
    dependentModels: ["medics"],
    totalContributors: 420,
    daysSinceLastRelease: 120,
    totalGithubForks: 21810
  },
  {
    packageName: "send2trash",
    snykHealthScore: 88,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 20,
    daysSinceLastRelease: 17,
    totalGithubForks: 31
  },
  {
    packageName: "sip",
    snykHealthScore: 64,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 0,
    daysSinceLastRelease: 0,
    totalGithubForks: 0
  },
  {
    packageName: "six",
    snykHealthScore: 85,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 60,
    daysSinceLastRelease: 120,
    totalGithubForks: 220
  },
  {
    packageName: "tensorboardX",
    snykHealthScore: 85,
    packageMaintenance: "Unfunded",
    dependentModels: ["eighteen"],
    totalContributors: 70,
    daysSinceLastRelease: 60,
    totalGithubForks: 829
  },
  {
    packageName: "terminado",
    snykHealthScore: 88,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 30,
    daysSinceLastRelease: 7,
    totalGithubForks: 74
  },
  {
    packageName: "testpath",
    snykHealthScore: 76,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 7,
    daysSinceLastRelease: 90,
    totalGithubForks: 24
  },
  {
    packageName: "tifffile",
    snykHealthScore: 81,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 1,
    daysSinceLastRelease: 17,
    totalGithubForks: 41
  },
  {
    packageName: "timm",
    snykHealthScore: 82,
    packageMaintenance: "Funded",
    dependentModels: ["selimsef"],
    totalContributors: 50,
    daysSinceLastRelease: 60,
    totalGithubForks: 1920
  },
  {
    packageName: "tornado",
    snykHealthScore: 91,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 340,
    daysSinceLastRelease: 300,
    totalGithubForks: 5420
  },
  {
    packageName: "tqdm",
    snykHealthScore: 97,
    packageMaintenance: "Funded",
    dependentModels: ["selimsef"],
    totalContributors: 110,
    daysSinceLastRelease: 2,
    totalGithubForks: 996
  },
  {
    packageName: "traitlets",
    snykHealthScore: 88,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 90,
    daysSinceLastRelease: 300,
    totalGithubForks: 163
  },
  {
    packageName: "urllib3",
    snykHealthScore: 100,
    packageMaintenance: "Funded",
    dependentModels: ["wm"],
    totalContributors: 250,
    daysSinceLastRelease: 60,
    totalGithubForks: 871
  },
  {
    packageName: "virtualenv",
    snykHealthScore: 97,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 60,
    daysSinceLastRelease: 15,
    totalGithubForks: 900
  },
  {
    packageName: "wcwidth",
    snykHealthScore: 75,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 8,
    daysSinceLastRelease: 365,
    totalGithubForks: 35
  },
  {
    packageName: "webencodings",
    snykHealthScore: 73,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 6,
    daysSinceLastRelease: 1460,
    totalGithubForks: 20
  },
  {
    packageName: "widgetsnbextension",
    snykHealthScore: 87,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 420,
    daysSinceLastRelease: 730,
    totalGithubForks: 4200
  },
  {
    packageName: "yarg",
    snykHealthScore: 49,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 1,
    daysSinceLastRelease: 2555,
    totalGithubForks: 3
  },
  {
    packageName: "zipp",
    snykHealthScore: 81,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 20,
    daysSinceLastRelease: 60,
    totalGithubForks: 20
  },
  {
    packageName: "",
    snykHealthScore: 0,
    packageMaintenance: "_",
    dependentModels: [],
    totalContributors: 0,
    daysSinceLastRelease: 0,
    totalGithubForks: 0
  }
];
