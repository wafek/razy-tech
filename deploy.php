<?php
		exec("git remote update");
		$local = exec("git rev-parse master");
		$remote = exec("git rev-parse origin/master");
		$base = exec("git merge-base master origin/master");

		if($local == $remote){
			echo "up to date";
		}
		else if($local == $base){
			echo "need to pull";
			echo exec("git   pull");
			echo exec("yarn build");	
		}
		else if($remote == $base){
			echo "need to push";	
		}
		else{
			echo "diverged";	
		}
?>
