def tagsAndBranches = ("/usr/local/bin/git ls-remote -t -h " + binding.variables['RepoURL']).execute()
def tagsAndBranchesList = tagsAndBranches.text.readLines().collect { it.split()[1] }
tagsAndBranchesList.removeAll { it.endsWith("^{}") || it.endsWith("dev") || it.endsWith("master") }

def releaseBranches = []
def hotfixBranches = []
def tags = []
for ( item in tagsAndBranchesList ) {
  if (item.startsWith('refs/tags/'))
  {
    tags.add(item.replaceAll('refs/tags/', ''))
  }
  else
  {
    def branchName = item.replaceAll('refs/heads/', '')
    if (item.startsWith('refs/heads/release/'))
    {
      releaseBranches.add(branchName)
    }
    else if (item.startsWith('refs/heads/hotfix/'))
    {
      hotfixBranches.add(branchName)
    }
    //else
    //{
    //  releaseBranches.add(branchName)
    //  hotfixBranches.add(branchName)
    //}
  }
}
tags.removeAll{ hotfixBranches.contains('hotfix/' + it) }

def list = []
String[] brancheTypes = binding.variables['BranchTypes'].split(',')
if (brancheTypes.contains('release'))
{
  list += releaseBranches
}
if (brancheTypes.contains('hotfix'))
{
  list += hotfixBranches
}
if (brancheTypes.contains('tag'))
{
  list += tags
}

return list.unique()
    .sort{a,b -> b.replaceAll('^(release|hotfix)/', '') <=> a.replaceAll('^(release|hotfix)/', '') ?: b <=> a }
    .take(10)
    .join(',')