export interface Row {
  packageName: string;
  snykHealthScore: number;
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
    dependentModels: ["selimsef", "wm", "ntech", "eighteen", "medics", "boken"]
  },
  {
    packageName: "torchvision",
    snykHealthScore: 97,
    packageMaintenance: "Unfunded",
    dependentModels: ["selimsef", "wm", "ntech", "eighteen", "medics", "boken"]
  },
  {
    packageName: "albumentations",
    snykHealthScore: 88,
    packageMaintenance: "Unfunded",
    dependentModels: ["selimsef", "ntech", "eighteen", "medics", "boken"]
  },
  {
    packageName: "boto3",
    snykHealthScore: 97,
    packageMaintenance: "Unfunded",
    dependentModels: ["selimsef", "wm", "ntech", "medics", "boken"]
  },
  {
    packageName: "opencv_python",
    snykHealthScore: 94,
    packageMaintenance: "Unfunded",
    dependentModels: ["selimsef", "ntech", "eighteen", "medics", "boken"]
  },
  {
    packageName: "opencv-python",
    snykHealthScore: 96,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"]
  },
  {
    packageName: "pandas",
    snykHealthScore: 96,
    packageMaintenance: "Funded",
    dependentModels: ["selimsef", "wm", "eighteen", "medics", "boken"]
  },
  {
    packageName: "torch",
    snykHealthScore: 94,
    packageMaintenance: "Unfunded",
    dependentModels: ["selimsef", "wm", "ntech", "eighteen", "boken"]
  },
  {
    packageName: "flask",
    snykHealthScore: 100,
    packageMaintenance: "Funded",
    dependentModels: ["selimsef", "wm", "ntech", "boken"]
  },
  {
    packageName: "pillow",
    snykHealthScore: 97,
    packageMaintenance: "Funded",
    dependentModels: ["selimsef", "wm", "eighteen", "boken"]
  },
  {
    packageName: "facenet_pytorch",
    snykHealthScore: 68,
    packageMaintenance: "Funded",
    dependentModels: ["selimsef", "medics", "boken"]
  },
  {
    packageName: "efficientnet_pytorch",
    snykHealthScore: 77,
    packageMaintenance: "Unfunded",
    dependentModels: ["ntech", "boken"]
  },
  {
    packageName: "pretrainedmodels",
    snykHealthScore: 61,
    packageMaintenance: "Unfunded",
    dependentModels: ["medics", "boken"]
  },
  {
    packageName: "scipy",
    snykHealthScore: 94,
    packageMaintenance: "Funded",
    dependentModels: ["medics"]
  },
  {
    packageName: "appdirs",
    snykHealthScore: 79,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"]
  },
  {
    packageName: "attrs",
    snykHealthScore: 97,
    packageMaintenance: "Funded",
    dependentModels: ["wm"]
  },
  {
    packageName: "autopep8",
    snykHealthScore: 88,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"]
  },
  {
    packageName: "backcall",
    snykHealthScore: 68,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"]
  },
  {
    packageName: "bleach",
    snykHealthScore: 97,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"]
  },
  {
    packageName: "certifi",
    snykHealthScore: 88,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"]
  },
  {
    packageName: "chardet",
    snykHealthScore: 88,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"]
  },
  {
    packageName: "cycler",
    snykHealthScore: 78,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"]
  },
  {
    packageName: "cython",
    snykHealthScore: 96,
    packageMaintenance: "Funded",
    dependentModels: ["medics"]
  },
  {
    packageName: "decorator",
    snykHealthScore: 88,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"]
  },
  {
    packageName: "decord",
    snykHealthScore: 76,
    packageMaintenance: "Unfunded",
    dependentModels: ["medics"]
  },
  {
    packageName: "defusedxml",
    snykHealthScore: 80,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"]
  },
  {
    packageName: "distlib",
    snykHealthScore: 72,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"]
  },
  {
    packageName: "docopt",
    snykHealthScore: 79,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"]
  },
  {
    packageName: "easydict",
    snykHealthScore: 56,
    packageMaintenance: "Unfunded",
    dependentModels: ["eighteen"]
  },
  {
    packageName: "einops",
    snykHealthScore: 72,
    packageMaintenance: "Unfunded",
    dependentModels: ["medics"]
  },
  {
    packageName: "elpy",
    snykHealthScore: 60,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"]
  },
  {
    packageName: "entrypoints",
    snykHealthScore: 73,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"]
  },
  {
    packageName: "faiss",
    snykHealthScore: 64,
    packageMaintenance: "Unfunded",
    dependentModels: ["medics"]
  },
  {
    packageName: "filelock",
    snykHealthScore: 73,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"]
  },
  {
    packageName: "flake8",
    snykHealthScore: 94,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"]
  },
  {
    packageName: "idna",
    snykHealthScore: 85,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"]
  },
  {
    packageName: "imageio",
    snykHealthScore: 81,
    packageMaintenance: "Funded",
    dependentModels: ["wm"]
  },
  {
    packageName: "importlib-metadata",
    snykHealthScore: 88,
    packageMaintenance: "Funded",
    dependentModels: ["wm"]
  },
  {
    packageName: "jedi",
    snykHealthScore: 91,
    packageMaintenance: "Funded",
    dependentModels: ["wm"]
  },
  {
    packageName: "jinja2",
    snykHealthScore: 100,
    packageMaintenance: "Funded",
    dependentModels: ["wm"]
  },
  {
    packageName: "jsonschema",
    snykHealthScore: 81,
    packageMaintenance: "Funded",
    dependentModels: ["wm"]
  },
  {
    packageName: "lmdb",
    snykHealthScore: 77,
    packageMaintenance: "Unfunded",
    dependentModels: ["medics"]
  },
  {
    packageName: "matplotlib",
    snykHealthScore: 77,
    packageMaintenance: "Unfunded",
    dependentModels: ["ntech"]
  },
  {
    packageName: "mccabe",
    snykHealthScore: 80,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"]
  },
  {
    packageName: "mistune",
    snykHealthScore: 80,
    packageMaintenance: "Funded",
    dependentModels: ["wm"]
  },
  {
    packageName: "mmcv",
    snykHealthScore: 87,
    packageMaintenance: "Unfunded",
    dependentModels: ["medics"]
  },
  {
    packageName: "mmdet",
    snykHealthScore: 90,
    packageMaintenance: "Unfunded",
    dependentModels: ["medics"]
  },
  {
    packageName: "nbconvert",
    snykHealthScore: 97,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"]
  },
  {
    packageName: "nbformat",
    snykHealthScore: 99,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"]
  },
  {
    packageName: "networkx",
    snykHealthScore: 96,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"]
  },
  {
    packageName: "notebook",
    snykHealthScore: 100,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"]
  },
  {
    packageName: "olefile",
    snykHealthScore: 61,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"]
  },
  {
    packageName: "pandocfilters",
    snykHealthScore: 85,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"]
  },
  {
    packageName: "parso",
    snykHealthScore: 86,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"]
  },
  {
    packageName: "pexpect",
    snykHealthScore: 83,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"]
  },
  {
    packageName: "pickleshare",
    snykHealthScore: 79,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"]
  },
  {
    packageName: "pipreqs",
    snykHealthScore: 65,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"]
  },
  {
    packageName: "prometheus-client",
    snykHealthScore: 100,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"]
  },
  {
    packageName: "prompt-toolkit",
    snykHealthScore: 88,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"]
  },
  {
    packageName: "ptyprocess",
    snykHealthScore: 84,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"]
  },
  {
    packageName: "pycodestyle",
    snykHealthScore: 95,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"]
  },
  {
    packageName: "pydocs",
    snykHealthScore: 42,
    packageMaintenance: "Unfunded",
    dependentModels: ["eighteen"]
  },
  {
    packageName: "pyflakes",
    snykHealthScore: 90,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"]
  },
  {
    packageName: "pygments",
    snykHealthScore: 94,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"]
  },
  {
    packageName: "pyparsing",
    snykHealthScore: 87,
    packageMaintenance: "Funded",
    dependentModels: ["wm"]
  },
  {
    packageName: "pyrsistent",
    snykHealthScore: 88,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"]
  },
  {
    packageName: "python-dateutil",
    snykHealthScore: 94,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"]
  },
  {
    packageName: "pytz",
    snykHealthScore: 80,
    packageMaintenance: "Funded",
    dependentModels: ["wm"]
  },
  {
    packageName: "pywavelets",
    snykHealthScore: 87,
    packageMaintenance: "Funded",
    dependentModels: ["wm"]
  },
  {
    packageName: "pyyaml",
    snykHealthScore: 85,
    packageMaintenance: "Unfunded",
    dependentModels: ["eighteen"]
  },
  {
    packageName: "pyzmq",
    snykHealthScore: 97,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"]
  },
  {
    packageName: "requests",
    snykHealthScore: 97,
    packageMaintenance: "Funded",
    dependentModels: ["wm"]
  },
  {
    packageName: "scikit_image",
    snykHealthScore: 91,
    packageMaintenance: "Funded",
    dependentModels: ["medics"]
  },
  {
    packageName: "scikit-image",
    snykHealthScore: 94,
    packageMaintenance: "Funded",
    dependentModels: ["wm"]
  },
  {
    packageName: "scikit_learn",
    snykHealthScore: 94,
    packageMaintenance: "Funded",
    dependentModels: ["medics"]
  },
  {
    packageName: "send2trash",
    snykHealthScore: 88,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"]
  },
  {
    packageName: "sip",
    snykHealthScore: 64,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"]
  },
  {
    packageName: "six",
    snykHealthScore: 85,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"]
  },
  {
    packageName: "tensorboardX",
    snykHealthScore: 85,
    packageMaintenance: "Unfunded",
    dependentModels: ["eighteen"]
  },
  {
    packageName: "terminado",
    snykHealthScore: 88,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"]
  },
  {
    packageName: "testpath",
    snykHealthScore: 76,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"]
  },
  {
    packageName: "tifffile",
    snykHealthScore: 81,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"]
  },
  {
    packageName: "timm",
    snykHealthScore: 82,
    packageMaintenance: "Funded",
    dependentModels: ["selimsef"]
  },
  {
    packageName: "tornado",
    snykHealthScore: 91,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"]
  },
  {
    packageName: "tqdm",
    snykHealthScore: 97,
    packageMaintenance: "Funded",
    dependentModels: ["selimsef"]
  },
  {
    packageName: "traitlets",
    snykHealthScore: 88,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"]
  },
  {
    packageName: "urllib3",
    snykHealthScore: 100,
    packageMaintenance: "Funded",
    dependentModels: ["wm"]
  },
  {
    packageName: "virtualenv",
    snykHealthScore: 97,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"]
  },
  {
    packageName: "wcwidth",
    snykHealthScore: 75,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"]
  },
  {
    packageName: "webencodings",
    snykHealthScore: 73,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"]
  },
  {
    packageName: "widgetsnbextension",
    snykHealthScore: 87,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"]
  },
  {
    packageName: "yarg",
    snykHealthScore: 49,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"]
  },
  {
    packageName: "zipp",
    snykHealthScore: 81,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"]
  },
  {
    packageName: "",
    snykHealthScore: 0,
    packageMaintenance: "_",
    dependentModels: []
  }
];
