("undefined"==typeof browser?chrome:browser).runtime.onMessage.addListener(((e,r,s)=>{switch(e.message){case"storePrefs":try{const r=`preferences_${e.action}`,t=JSON.stringify(e.data);localStorage.setItem(r,t),s({success:!0})}catch(e){s({success:!1,error:e})}break;case"retrievePrefs":{const r=`preferences_${e.action}`,t=localStorage.getItem(r);try{s({data:JSON.parse(t)})}catch(e){s({data:null,error:e})}break}}}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvYmFja2dyb3VuZC5idW5kbGUuanMiLCJtYXBwaW5ncyI6IkNBQTBDLG9CQUFaQSxRQUEwQkMsT0FBU0QsU0E4QmxERSxRQUFRQyxVQUFVQyxhQTVCaEIsQ0FBQ0MsRUFBU0MsRUFBUUMsS0FDakMsT0FBUUYsRUFBUUcsU0FDZCxJQUFLLGFBQ0gsSUFDRSxNQUFNQyxFQUFPLGVBQWNKLEVBQVFLLFNBQzdCQyxFQUFlQyxLQUFLQyxVQUFVUixFQUFRUyxNQUM1Q0MsYUFBYUMsUUFBUVAsRUFBS0UsR0FDMUJKLEVBQWEsQ0FBRVUsU0FBUyxJQUN4QixNQUFPQyxHQUNQWCxFQUFhLENBQUVVLFNBQVMsRUFBT0UsTUFBT0QsSUFFeEMsTUFFRixJQUFLLGdCQUFpQixDQUNwQixNQUFNVCxFQUFPLGVBQWNKLEVBQVFLLFNBQzdCQyxFQUFlSSxhQUFhSyxRQUFRWCxHQUMxQyxJQUVFRixFQUFhLENBQUVPLEtBRERGLEtBQUtTLE1BQU1WLEtBRXpCLE1BQU9PLEdBQ1BYLEVBQWEsQ0FBRU8sS0FBTSxLQUFNSyxNQUFPRCxJQUVwQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9CYWNrZ3JvdW5kL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHJ1blRpbWVIYW5kbGVyID0gdHlwZW9mIGJyb3dzZXIgPT09ICd1bmRlZmluZWQnID8gY2hyb21lIDogYnJvd3NlcjtcblxuY29uc3QgbGlzdGVuZXIgPSAocmVxdWVzdCwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpID0+IHtcbiAgc3dpdGNoIChyZXF1ZXN0Lm1lc3NhZ2UpIHtcbiAgICBjYXNlICdzdG9yZVByZWZzJzoge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3Qga2V5ID0gYHByZWZlcmVuY2VzXyR7cmVxdWVzdC5hY3Rpb259YDtcbiAgICAgICAgY29uc3QgcHJlZnNKU09OU3RyID0gSlNPTi5zdHJpbmdpZnkocmVxdWVzdC5kYXRhKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBwcmVmc0pTT05TdHIpO1xuICAgICAgICBzZW5kUmVzcG9uc2UoeyBzdWNjZXNzOiB0cnVlIH0pO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHNlbmRSZXNwb25zZSh7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyIH0pO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNhc2UgJ3JldHJpZXZlUHJlZnMnOiB7XG4gICAgICBjb25zdCBrZXkgPSBgcHJlZmVyZW5jZXNfJHtyZXF1ZXN0LmFjdGlvbn1gO1xuICAgICAgY29uc3QgcHJlZnNKU09OU3RyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHByZWZzID0gSlNPTi5wYXJzZShwcmVmc0pTT05TdHIpO1xuICAgICAgICBzZW5kUmVzcG9uc2UoeyBkYXRhOiBwcmVmcyB9KTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBzZW5kUmVzcG9uc2UoeyBkYXRhOiBudWxsLCBlcnJvcjogZXJyIH0pO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICBicmVhaztcbiAgfVxufTtcbnJ1blRpbWVIYW5kbGVyLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKGxpc3RlbmVyKTtcbiJdLCJuYW1lcyI6WyJicm93c2VyIiwiY2hyb21lIiwicnVudGltZSIsIm9uTWVzc2FnZSIsImFkZExpc3RlbmVyIiwicmVxdWVzdCIsInNlbmRlciIsInNlbmRSZXNwb25zZSIsIm1lc3NhZ2UiLCJrZXkiLCJhY3Rpb24iLCJwcmVmc0pTT05TdHIiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJzdWNjZXNzIiwiZXJyIiwiZXJyb3IiLCJnZXRJdGVtIiwicGFyc2UiXSwic291cmNlUm9vdCI6IiJ9